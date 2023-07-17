import { NavigateOptions, useNavigate } from "react-router-dom";
import { isApp } from "../utils/isApp";

const sendRouterEvent = (path: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: path }),
  );
};

export const useRouter = () => {
  const nav = useNavigate();

  const back = () => {
    if (isApp()) {
      sendRouterEvent("back");

      return;
    }
    nav(-1);
  };

  const push = ({
    url,
    options,
  }: {
    url: string;
    options?: NavigateOptions;
  }) => {
    if (isApp()) {
      sendRouterEvent(url);

      return;
    }
    nav(url, options);
  };

  return {
    back,
    push,
  };
};
