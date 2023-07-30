import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api";

const roomDetail = async (room_id: string) => {
  const url = `/api/room/detail/?room_id=${room_id}`;
  const result = await instance.get(url);
  return result;
};

export const useRoomDetail = (room_id: string) => {
  return useQuery(["roomDetail", room_id], () => roomDetail(room_id));
};
