import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { instance } from "../../../api";
import { emailAtom } from "../../../store";

const EMAIL = localStorage.getItem("email");

interface RoomListRes {
  created_at: string;
  id: number;
  name: string;
}

const roomList = async (email: string) => {
  const url = `/rooms/user/${email}`;
  const result = await instance.get<RoomListRes[]>(url);
  return result;
};

export const useRoomList = () => {
  const email = useAtomValue(emailAtom);

  return useQuery(["roomList", EMAIL], () => roomList(EMAIL || email));
};
