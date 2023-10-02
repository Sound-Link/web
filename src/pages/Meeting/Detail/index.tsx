import { Button, Flex, Image } from "@chakra-ui/react";
import { Suspense, useEffect, useRef, useState } from "react";
import { bridge } from "../../../utils/bridge";
import { isAndroid, isIos } from "../../../utils/isApp";
import { useSendAudio } from "../queries/useSendAudio";
import { useRouter } from "../../../hooks/useRouter";
import { ChatList } from "./ChatList";
import Images from "../../../assets/images/Icon";
import { DetailSkeleton } from "./Skeleton";

const MeetingDetail = () => {
  const [recordData, setRecordData] = useState<
    {
      text: string;
      createAt: string;
      id: string;
    }[]
  >([]);
  const listRef = useRef<HTMLDivElement>(null);
  const { mutate } = useSendAudio(setRecordData);
  const { query } = useRouter();
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (listRef?.current) {
      listRef.current.scrollTo(0, listRef.current.scrollHeight);
    }
  }, [recordData]);

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
        mutate({
          data: s.data,
          roomId: query.roomId as string,
        });
      },
    });
  };

  const handleGetCurrentData = async () => {
    await stopRecode();
    await startRecode();
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timer: any;
    if (isRecording) {
      timer = setInterval(
        () => {
          handleGetCurrentData();
        },
        Number(localStorage.getItem("recordInterval")) || 5000,
      );
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRecording]);

  return (
    <Flex direction="column" px="1.6rem" height="100%" align="center">
      <Suspense fallback={<DetailSkeleton />}>
        <ChatList ref={listRef} recordData={recordData} />
      </Suspense>
      {isRecording ? (
        <Image
          css={{ width: "9rem" }}
          src={Images.OnButton}
          onClick={() => stopRecode()}
        />
      ) : (
        <Image
          css={{ width: "9rem" }}
          src={Images.OffButton}
          onClick={() => startRecode()}
        />
      )}
    </Flex>
  );
};

export default MeetingDetail;
