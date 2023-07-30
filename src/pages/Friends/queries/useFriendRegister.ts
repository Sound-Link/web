import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";

const friendRegister = async (friendRegisterInput: {
  user_id: string;
  phone_number: string;
}) => {
  const url = "/api/user/friend/register";
  const params = { friendRegisterInput };
  const result = await instance.post(url, params);

  return result.data;
};

export const useFriendRegister = (
  options?: MutationOptions<
    unknown,
    unknown,
    unknown,
    { friendRegisterInput: { user_id: string; phone_number: string } }
  >,
) => {
  return useMutation(friendRegister, options);
};
