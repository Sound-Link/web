import { useMutation } from "@tanstack/react-query";
import { instance } from "../../../api";

const sendAudio = async (_data: string) => {
  const byteCharacters = atob(_data);
  const byteNumbers = new Array(byteCharacters.length);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "audio/mpeg" }); // 적절한 MIME 타입 설정

  // FormData에 파일 추가
  const formData = new FormData();
  formData.append("file", blob, "file.m4a");

  const result = await instance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return result;
};

export const useSendAudio = () => {
  return useMutation(sendAudio);
};
