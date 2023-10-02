import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "./useRouter";

const NOT_AUTH_PATH = ["signUp", "signIn"];
// 테스트를 위해 access_token으로 변경
export const USER_PHONE_NUMBER = "access_token";
export const MY_PHONE_NUMBER = localStorage.getItem(USER_PHONE_NUMBER);

export const useAuth = () => {
  const { pathname } = useLocation();
  const { push } = useRouter();
  const phoneNumber = localStorage.getItem(USER_PHONE_NUMBER);
  const isLogin = !!phoneNumber;

  const setPhoneNumber = (_phoneNumber: string) => {
    localStorage.setItem(USER_PHONE_NUMBER, _phoneNumber);
  };

  // TODO: 이거 주석
  useEffect(() => {
    if (!isLogin) {
      if (!NOT_AUTH_PATH.includes(pathname.split("/")[1])) {
        push({
          url: "/signIn",
        });
      }
    } else if (NOT_AUTH_PATH.includes(pathname.split("/")[1])) {
      push({
        url: "/",
      });
    }
  }, []);

  return {
    isLogin,
    setPhoneNumber,
  };
};
