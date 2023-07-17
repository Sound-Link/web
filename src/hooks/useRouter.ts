import { useNavigate } from "react-router-dom";
import { isApp } from "../utils/isApp";

const sendRouterEvent = (path: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: path })
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

  const push = ({ url, params }: { url: string; params?: any }) => {
    if (isApp()) {
      sendRouterEvent(url);

      return;
    }
    nav({
      pathname: url,
      search: params,
    });
  };

  return {
    back,
    push,
  };
};
