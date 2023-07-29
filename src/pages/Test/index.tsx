import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { bridge } from "../../utils/bridge";

const Test = () => {
  const { back } = useRouter();
  const [res, setRes] = useState("");

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Test
      <button onClick={() => back()}>home으로</button>
      <button
        onClick={() =>
          bridge({
            type: "PERMISSIONS",
          })
        }
      >
        브릿지버튼
      </button>
      <Input placeholder="sound lint" />
      <audio controls>
        <source src={res} type="audio/mp4" />
        <track kind="captions" />
        Your browser does not support the audio element.
      </audio>
      <div
        style={{
          position: "relative",
          top: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button
          onClick={() => {
            bridge({
              type: "RECORD_START",
            });
          }}
        >
          녹음 시작
        </button>
        <button
          onClick={() => {
            bridge<{ uri: string }>({
              type: "RECORD_STOP",
              onSuccess: s => {
                console.log(s.uri);
                setRes(s.uri);
              },
            });
          }}
        >
          녹음 종료 {res}
        </button>
      </div>
    </div>
  );
};

export default Test;
