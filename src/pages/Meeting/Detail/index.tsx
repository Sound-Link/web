import { Button, Center } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { bridge } from "../../../utils/bridge";
import { isAndroid, isIos } from "../../../utils/isApp";
import { useSendAudio } from "../queries/useSendAudio";

const MeetingDetail = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const { mutate } = useSendAudio();

  useEffect(() => {
    const ws = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");
    socketRef.current = ws;
    ws.onmessage = e => {
      // console.log(e.data);
    };
  }, []);

  const handleSendMessage = () => {
    if (!socketRef.current) return;
    socketRef.current?.send("testtest12312");
  };

  const startRecode = async () => {
    if (!(isIos || isAndroid)) return;
    await bridge({
      type: "RECORD_START",
    });
  };

  const stopRecode = async () => {
    await bridge<{ data: string }>({
      type: "RECORD_STOP",
      onSuccess: s => {
        mutate(s.data);
      },
    });
  };

  return (
    <Center
      position="relative"
      marginTop="5rem"
      color="white"
      fontSize="2rem"
      fontWeight={700}
    >
      Meeting History Detail
      <Button onClick={handleSendMessage}>메세지 보내기</Button>
      <Button onClick={startRecode}>시작</Button>
      <Button onClick={stopRecode}>종료</Button>
    </Center>
  );
};

export default MeetingDetail;
