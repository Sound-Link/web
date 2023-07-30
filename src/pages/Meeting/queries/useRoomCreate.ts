import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";

const roomCreate = async (roomCreateInput: {
  user_ids: string[];
  name: string;
}) => {
  const url = "/api/user/signup";
  const params = { roomCreateInput };
  const result = await instance.post(url, params);

  return result.data;
};

export const useRoomCreate = (
  options?: MutationOptions<
    string,
    unknown,
    unknown,
    { roomCreateInput: { user_ids: string[]; name: string } }
  >,
) => {
  return useMutation(roomCreate, options);
};
