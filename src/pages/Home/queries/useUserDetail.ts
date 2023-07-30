import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api";

const userDetail = async (user_id: string) => {
  const url = `/api/user/detail/?user_id=${user_id}`;
  const result = await instance.get(url);
  return result;
};

export const useUserDetail = (user_id: string) => {
  return useQuery(["userDetail", user_id], () => userDetail(user_id));
};
