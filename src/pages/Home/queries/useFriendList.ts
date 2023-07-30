import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api";

const friendList = async (user_id: string) => {
  const url = `/api/user/friend/list?user_id=${user_id}`;
  const result = await instance.get(url);
  return result;
};

export const useFriendList = (user_id: string) => {
  return useQuery(["friendList", user_id], () => friendList(user_id));
};
