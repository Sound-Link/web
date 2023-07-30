import React, { useState, useEffect } from "react";
import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { bridge } from "../../../../utils/bridge";
import { useRouter } from "../../../../hooks/useRouter";
import { useVoiceRegister } from "../../queries/useVoiceRegister";
import { MY_PHONE_NUMBER } from "../../../../hooks/useAuth";

const totalSpeakingTime = 20;
const intervalSpeakingTime = 10;

const CustomedFlex = styled(Flex)`
  opacity: 0;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
  }
`;

interface EnrollStep2Props {
  nextStep: () => void;
}

const EnrollStep2: React.FC<EnrollStep2Props> = ({ nextStep }) => {
  const [res, setRes] = useState("");
  const [onRecording, setOnRecording] = useState<boolean>(false);
  const [time, setTime] = useState<number>(totalSpeakingTime);

  // const { mutate } = useVoiceRegister({
  //   // TODO: loading, error exec
  //   onSuccess: () => {
  //     nextStep();
  //   },
  // });

  useEffect(() => {
    async function execFunction() {
      if (time > 0) {
        if (!onRecording && time === totalSpeakingTime) {
          setOnRecording(true);
          // TODO: 디테일한 권한 처리 나중에
          // await bridge({
          //   type: "PERMISSIONS",
          // });
          // await bridge({
          //   type: "RECORD_START",
          // });
        }
        setTimeout(() => setTime(time - 1), 1000);
      } else {
        setOnRecording(false);
        // await bridge<{ uri: string }>({
        //   type: "RECORD_STOP",
        //   onSuccess: s => {
        //     // console.log(s.uri);
        //     setRes(s.uri);
        //   },
        // });
        console.log(res);
        // if (MY_PHONE_NUMBER) {
        //   mutate({ user_id: MY_PHONE_NUMBER, voice_file_uri: res });
        // }
      }
    }
    execFunction();
  }, [time]);

  return (
    <Stack
      gap="3.5rem"
      alignItems="center"
      padding="4rem"
      width="100%"
      marginTop="7rem"
    >
      <Center
        width="80%"
        borderRadius="50%"
        // padding="0.2rem"
        // background="gradient.button"
        // position="relative"
      >
        {/* TODO: ProgressBar 수정 */}
        <CircularProgressbar
          value={time > intervalSpeakingTime ? 0 : 50}
          text={`${(time > intervalSpeakingTime ? 0 : 50).toString()}%`}
          strokeWidth={10}
          backgroundPadding={5}
          background
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "1.5rem",
            textColor: "#7D7D7F",
            pathColor: `#7D7D7F`,
            pathTransitionDuration: 0.5,
            // trailColor: "transparent",
            // backgroundColor: "#7D7D7F",
          })}
        />
      </Center>

      <Text
        color="#7D7D7F"
        fontSize="1.5rem"
        fontFamily="JamsilBold"
        fontWeight="bold"
        textAlign="center"
      >
        다음 문장을
        <br />
        읽어주시길 바랍니다
      </Text>

      {time > intervalSpeakingTime && (
        <CustomedFlex
          className={
            time > intervalSpeakingTime + 1 && time <= totalSpeakingTime - 1
              ? "active"
              : ""
          }
          background="linear-gradient(to top, orange 0%,  purple 100%)"
          padding="1px"
          width="100%"
        >
          <Flex
            padding="2rem"
            backgroundColor="bgColor.gray"
            width="100%"
            justifyContent="center"
          >
            <Text
              color="fontColor.gray"
              fontSize="2rem"
              fontFamily="JamsilExtraBold"
              fontWeight="bold"
              textAlign="center"
            >
              안녕하십니까.
              <br />
              저는 이번 회의에서
              <br />
              OO을 담당하게 된
              <br />
              OO부서 김땡땡입니다.
            </Text>
          </Flex>
        </CustomedFlex>
      )}
      {time <= intervalSpeakingTime && (
        <CustomedFlex
          className={
            time <= intervalSpeakingTime - 1 && time > 1 ? "active" : ""
          }
          background="linear-gradient(to top, orange 0%,  purple 100%)"
          padding="2px"
          width="100%"
        >
          <Flex
            padding="2rem"
            backgroundColor="bgColor.gray"
            width="100%"
            justifyContent="center"
          >
            <Text
              color="fontColor.gray"
              fontSize="2rem"
              fontFamily="JamsilExtraBold"
              fontWeight="bold"
              textAlign="center"
            >
              저는 저번 회의에서
              <br />
              OO을 맡았습니다.
              <br />
              저의 강점은 OO이고,
              <br />
              약점은 OO입니다.
            </Text>
          </Flex>
        </CustomedFlex>
      )}
    </Stack>
  );
};

export default EnrollStep2;
