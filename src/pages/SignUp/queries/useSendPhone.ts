import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";

const sendPhone = async (phone_number: string) => {
  const result = await instance.post(
    `/api/user/signup?phone_number=${phone_number}`,
  );

  return result.data;
};

export const useSendPhone = (
  options?: MutationOptions<
    unknown,
    unknown,
    unknown,
    { phone_number: string }
  >,
) => {
  return useMutation(sendPhone, options);
};
