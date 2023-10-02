import { useQuery } from "@tanstack/react-query";
import { RefObject, useEffect } from "react";
import { instance } from "../../../api";

interface RoomDetailRes {
  created_at: string;
  id: number;
  room_id: number;
  text: string;
}

const roomDetail = async (roomId: string) => {
  const url = `/chats/room/${roomId}`;
  const result = await instance.get<RoomDetailRes[]>(url);
  return result.data;
};

export const useRoomDetail = (
  roomId: string,
  ref: RefObject<HTMLDivElement> | null,
) => {
  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [ref]);

  return useQuery(["roomDetail", roomId], () => roomDetail(roomId), {
    onSuccess: () => {
      if (ref?.current) {
        ref.current.scrollTo(0, ref.current.scrollHeight);
      }
    },
  });
};
