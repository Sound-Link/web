import { useQuery } from "@tanstack/react-query";
import { instance } from "../../../api";

const EMAIL = localStorage.getItem("email");

interface RoomListRes {
  created_at: string;
  id: number;
  name: string;
}

const roomList = async () => {
  const url = `/rooms/user/${EMAIL}`;
  const result = await instance.get<RoomListRes[]>(url);
  return result;
};

export const useRoomList = () => {
  return useQuery(["roomList", EMAIL], roomList, {
    enabled: !!EMAIL,
  });
};
