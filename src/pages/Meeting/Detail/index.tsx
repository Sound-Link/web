import { Button, Center } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const MeetingDetail = () => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/");
    socketRef.current = ws;
    ws.onmessage = e => {
      console.log(e.data);
    };
  }, []);

  const handleSendMessage = () => {
    if (!socketRef.current) return;
    socketRef.current?.send("testtest12312");
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
    </Center>
  );
};

export default MeetingDetail;
