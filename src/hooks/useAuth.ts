import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRouter } from "./useRouter";

const NOT_AUTH_PATH = ["signUp", "signIn"];
export const USER_PHONE_NUMBER = "userPhoneNumber";
export const MY_PHONE_NUMBER = localStorage.getItem(USER_PHONE_NUMBER);

export const useAuth = () => {
  const { pathname } = useLocation();
  const { push } = useRouter();
  const phoneNumber = localStorage.getItem(USER_PHONE_NUMBER);
  const isLogin = !!phoneNumber;

  const setPhoneNumber = (_phoneNumber: string) => {
    localStorage.setItem(USER_PHONE_NUMBER, _phoneNumber);
  };

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
