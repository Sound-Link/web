import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
import { useRouter } from "../../../hooks/useRouter";

const roomCreate = async (name: string) => {
  const url = "/rooms/create";
  const result = await instance.post(url, {
    email: localStorage.getItem("email"),
    name,
  });

  return result.data;
};

export const useRoomCreate = () => {
  const { push } = useRouter();

  return useMutation(roomCreate, {
    onSuccess: data => {
      push({
        url: `/meeting/${data.id}`,
      });
    },
  });
};
