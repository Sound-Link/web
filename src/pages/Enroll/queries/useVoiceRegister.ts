import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
// import { useRouter } from "../../../hooks/useRouter";

const voiceRegister = async (file: File) => {
  // TODO: Change to User ID
  const formData = new FormData();
  formData.append("file", file);
  const url = `/api/voice/register?user_id=2`;
  // const params = params;
  const result = await instance.post(url, formData);

  return result.data;
};

export const useVoiceRegister = (
  options?: MutationOptions<unknown, unknown, unknown, { file: File }>,
) => {
  return useMutation(voiceRegister, options);
};
