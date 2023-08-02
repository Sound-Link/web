import { MutationOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";
import { useRouter } from "../../../hooks/useRouter";

const voiceRegister = async (params: {
  username: string;
  voice_file_uri: string;
}) => {
  const url = "/api/user/voice/register";
  // const params = params;
  const result = await instance.post(url, params);

  return result.data;
};

export const useVoiceRegister = (
  options?: MutationOptions<
    unknown,
    unknown,
    unknown,
    { username: string; voice_file_uri: string }
  >,
) => {
  const { query } = useRouter();
  const { username } = query as { [key: string]: string };

  return useMutation(
    (voice_file_uri: string) =>
      voiceRegister({
        username: decodeURIComponent(username),
        voice_file_uri,
      }),
    options,
  );
};
