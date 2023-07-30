import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api";

const roomList = async (user_id: string) => {
  const url = `/api/room/list/?user_id=${user_id}`;
  const result = await instance.get(url);
  return result;
};

export const useRoomList = (user_id: string) => {
  return useQuery(["roomList", user_id], () => roomList(user_id));
};
