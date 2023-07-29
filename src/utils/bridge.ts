import { isIos } from "./isApp";

interface PostMessage {
  type: string;
  data: unknown;
}

const postMessage = ({ type, data }: PostMessage) =>
  new Promise<void>(() => {
    setTimeout(() => {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type,
          data,
        }),
      );
    }, 0);
  });

interface Bridge<T> {
  type: string;
  data?: unknown;
  onSuccess?: (data: T) => void;
}

export const bridge = async <T>({ data, onSuccess, type }: Bridge<T>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMessage = (e: any) => {
    onSuccess?.(JSON.parse(e.data));
  };

  if (isIos()) {
    window.addEventListener("message", handleMessage);
  }
  document.addEventListener("message", handleMessage);

  await postMessage({ type, data });

  if (isIos()) {
    window.removeEventListener("message", handleMessage);
  }
  document.removeEventListener("message", handleMessage);
};
