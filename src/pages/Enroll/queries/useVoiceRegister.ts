import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";

const voiceRegister = async (voiceRegisterInput: {
  user_id: string;
  voice_file_uri: string;
}) => {
  const url = "/api/user/voice/register";
  const params = { voiceRegisterInput };
  const result = await instance.post(url, params);

  return result.data;
};

export const useVoiceRegister = (
  options?: MutationOptions<
    unknown,
    unknown,
    unknown,
    { voiceRegisterInput: { user_id: string; voice_file_uri: string } }
  >,
) => {
  return useMutation(voiceRegister, options);
};
