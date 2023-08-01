import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
import { useRouter } from "../../../hooks/useRouter";

interface Verify {
  verification_code: number;
  signin_input: {
    username: string;
    phone_number: string;
  };
}

const verify = async (params: Verify) => {
  const result = await instance.post("/api/user/verify", params);

  return result.data;
};

export const useVerify = (
  options?: MutationOptions<
    unknown,
    unknown,
    unknown,
    Pick<Verify, "verification_code">
  >,
) => {
  const { query } = useRouter();
  const { username, phoneNumber } = query as { [key: string]: string };

  return useMutation(
    (verification_code: number) =>
      verify({
        signin_input: {
          username: decodeURIComponent(username),
          phone_number: phoneNumber,
        },
        verification_code,
      }),
    options,
  );
};
