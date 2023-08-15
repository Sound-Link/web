import { Button, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { bridge } from "../../utils/bridge";
import { useVoiceRegister } from "../Enroll/queries/useVoiceRegister";

const Test = () => {
  const { back, push } = useRouter();
  const [res, setRes] = useState<File>();

  const { mutate } = useVoiceRegister({
    onSuccess: () => {
      // push({
      //   url: `/signUp/verify/${phoneNumber}`,
      //   params: {
      //     username: decodeURIComponent(username),
      //   },
      // });
      console.log("use voice register");
    },
  });

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Test
      <Button
        onClick={() => {
          mutate(new File(["foo"], "foo"));
        }}
      >
        file mutate
      </Button>
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
        {/* <source src={res} type="audio/mp4" /> */}
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
            bridge<{ data: File }>({
              type: "RECORD_STOP",
              data: {
                data: "",
              },
              onSuccess: s => {
                console.log(s.data);
                setRes(s.data);
              },
            });
          }}
        >
          녹음 종료
        </button>
      </div>
    </div>
  );
};

export default Test;
