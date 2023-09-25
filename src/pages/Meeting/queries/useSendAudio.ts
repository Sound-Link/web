import { useMutation } from "@tanstack/react-query";
import toWav from "audiobuffer-to-wav";
import { Dispatch, SetStateAction } from "react";
import { instance } from "../../../api";

const sendAudio = async (_data: string) => {
  const audioCtx = new window.AudioContext();

  // base64 데이터를 ArrayBuffer로 변환
  const arrayBuffer = Uint8Array.from(atob(_data), c => c.charCodeAt(0)).buffer;

  // ArrayBuffer를 AudioBuffer로 변환
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  // AudioBuffer를 .wav 형식으로 변환
  const wav = toWav(audioBuffer);
  const blob = new Blob([new DataView(wav)], { type: "audio/wav" });

  // FormData에 파일 추가
  const formData = new FormData();
  formData.append("file", blob, "file.wav");

  const result = await instance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return result;
};

export const useSendAudio = (
  setRecordData: Dispatch<SetStateAction<string[]>>,
) => {
  return useMutation(sendAudio, {
    onSuccess: data => {
      alert("성공");
      setRecordData(prev => [...prev, data.data.text]);
    },
    onError: e => {
      alert(JSON.stringify(e));
    },
  });
};
