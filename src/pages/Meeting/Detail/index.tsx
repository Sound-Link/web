import { Button, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { bridge } from "../../../utils/bridge";
import { isAndroid, isIos } from "../../../utils/isApp";
import { useSendAudio } from "../queries/useSendAudio";
import { useSocket } from "../../../hooks/useSocket";
import { useRouter } from "../../../hooks/useRouter";

const MeetingDetail = () => {
  const [recordData, setRecordData] = useState<string[]>([]);
  const { mutate, data } = useSendAudio(setRecordData);
  const { query } = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  // const { messages, sendMessage } = useSocket<string>({
  //   url: `wss://3.35.119.71/voice/${query.roomId}`,
  // });

  const startRecode = async () => {
    if (!(isIos || isAndroid)) return;
    await bridge({
      type: "RECORD_START",
    });
    setIsRecording(true);
  };

  const stopRecode = async () => {
    await bridge<{ data: string }>({
      type: "RECORD_STOP",
      onSuccess: s => {
        mutate(s.data);
      },
    });
  };

  const handleGetCurrentData = async () => {
    await bridge<{ data: string }>({
      type: "GET_CURRENT_DATA",
      onSuccess: s => {
        mutate(s.data);
      },
    });
    // stopRecode().then(() => {
    //   startRecode();
    // });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    if (isRecording) {
      timer = setInterval(() => {
        handleGetCurrentData();
      }, 5000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRecording]);

  return (
    <Center
      position="relative"
      marginTop="5rem"
      color="white"
      fontSize="2rem"
      fontWeight={700}
    >
      Meeting History Detail1
      <Button onClick={startRecode}>시작</Button>
      <Button
        onClick={() => {
          stopRecode();
          setIsRecording(false);
        }}
      >
        종료
      </Button>
      <Button onClick={handleGetCurrentData}>현재 녹음 데이터 받기</Button>
      <Button onClick={() => setIsRecording(true)}>연속 시작</Button>
      <Button
        onClick={() => {
          setIsRecording(false);
        }}
      >
        ㄹㅇ끄기
      </Button>
      <div style={{ position: "fixed", top: "50%" }}>
        {!!recordData.length &&
          recordData.map((text, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={String(index)}>{text}</div>
          ))}
      </div>
    </Center>
  );
};

export default MeetingDetail;
