import { useEffect, useRef, useState } from "react";

interface UseSocketProps {
  url: string;
}

export const useSocket = <T>({ url }: UseSocketProps) => {
  const [messages, setMessages] = useState<T[] | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  useEffect(() => {
    const ws = new WebSocket(url);
    socketRef.current = ws;
    ws.onmessage = (e: { data: T }) => {
      setMessages(prev => {
        if (prev) {
          return [...prev, e.data];
        }
        return [e.data];
      });
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socketRef.current) {
      socketRef.current.send(message);
    }
  };

  return {
    messages,
    sendMessage,
  };
};
