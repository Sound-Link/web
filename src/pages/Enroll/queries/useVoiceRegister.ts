import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
// import { useRouter } from "../../../hooks/useRouter";

const voiceRegister = async (file: File) => {
  // TODO: Change to User ID
  // const newFormData = new FormData();
  // newFormData.append("user_id", "1234");
  const url = `/api/user/voice/register?user_id=1234`;
  // const params = params;
  const result = await instance.post(url, file);

  return result.data;
};

export const useVoiceRegister = (
  options?: MutationOptions<unknown, unknown, unknown, File>,
) => {
  // const { query } = useRouter();
  // const { username } = query as { [key: string]: string };

  return useMutation((file: File) => voiceRegister(file), options);
};
