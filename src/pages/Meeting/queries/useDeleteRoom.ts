import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
import { useRouter } from "../../../hooks/useRouter";

const deleteRoom = async (roomId: string) => {
  const url = `/rooms/delete/${roomId}`;
  const result = await instance.delete(url);

  return result;
};

export const useDeleteRoom = (onClose: () => void) => {
  const { query, back } = useRouter();

  return useMutation(() => deleteRoom(query.roomId as string), {
    onSuccess: () => {
      onClose();
      back();
    },
  });
};
