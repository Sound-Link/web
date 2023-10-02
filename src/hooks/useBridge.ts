import { useEffect } from "react";
import { isIos } from "../utils/isApp";

interface Bridge<T> {
  type: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
}
interface PostMessage {
  type: string;
  data: unknown;
}

const postMessage = ({ type, data }: PostMessage) =>
  new Promise<void>(() => {
    setTimeout(() => {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({
          type,
          data,
        }),
      );
    }, 0);
  });

export const useBridge = <T>({ data, onSuccess, type }: Bridge<T>) => {
  const handleMessage = (e: any) => {
    onSuccess?.(JSON.parse(e.data));
  };

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    document.addEventListener("message", handleMessage);
    return () => document.removeEventListener("message", handleMessage);
  }, []);

  return {};
};
