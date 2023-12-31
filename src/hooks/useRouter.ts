import {
  NavigateOptions,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { isApp } from "../utils/isApp";
import { vaildateToken } from "../api/auth";

const objectToQueryString = (params: object) => {
  const queryStrings: string[] = [];

  Object.keys(params).forEach(key => {
    const value = encodeURIComponent(params[key as keyof typeof params]);
    queryStrings.push(`${key}=${value}`);
  });

  return `?${queryStrings.join("&")}`;
};

function queryStringToObject(queryString: string) {
  const params = {} as { [key: string]: string };
  const pairs = queryString.substring(1).split("&");

  Object.keys(pairs).forEach(key => {
    const pair = pairs[key as keyof typeof pairs];
    const [keyName, value] = String(pair).split("=");
    params[keyName] = value;
  });

  return params;
}

const sendRouterEvent = (type: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: type }),
  );
};

export const useRouter = () => {
  const nav = useNavigate();
  const { search } = useLocation();
  const queryStrings = useParams();

  const back = () => {
    if (isApp()) {
      sendRouterEvent("back");
    }
    vaildateToken();
    nav(-1);
  };

  const push = ({
    url,
    options,
    params,
  }: {
    url: string;
    options?: NavigateOptions;
    params?: object;
  }) => {
    const paramsString = params ? objectToQueryString(params) : "";
    if (isApp()) {
      sendRouterEvent("push");
    }
    nav(`${url}${paramsString}`, options);
    vaildateToken();
  };

  const getQuery = () => {
    if (!search) return { ...queryStrings };
    return { ...queryStrings, ...queryStringToObject(search) };
  };

  return {
    back,
    push,
    query: getQuery(),
  };
};
