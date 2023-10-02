import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSetAtom } from "jotai";
import { instance } from ".";
import { emailAtom } from "../store";

export const createUser = async (email: string) => {
  const res = await instance.post("/user_create", {
    email,
  });

  return res.data;
};

export const userCreateUser = () => {
  return useMutation(createUser);
};

export const getUser = async () => {
  const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  return res.data;
};

export const useGetUser = () => {
  const { mutate } = userCreateUser();
  const setEmail = useSetAtom(emailAtom);

  return useQuery(["getUserData"], getUser, {
    onSuccess: data => {
      localStorage.setItem("email", data.kakao_account.email);
      setEmail(data.kakao_account.email);
      mutate(data.kakao_account.email);
    },
    enabled:
      !localStorage.getItem("email") && !!localStorage.getItem("access_token"),
  });
};
