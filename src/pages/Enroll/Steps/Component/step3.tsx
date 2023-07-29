import React from "react";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "../../../../hooks/useRouter";
import { OkButton } from "../../../../components/common/OkButton";

const EnrollStep3: React.FC = () => {
  const { push } = useRouter();

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
          value={100}
          text="100%"
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
        fontFamily="JamsilExtraBold"
        fontWeight="bold"
        textAlign="center"
      >
        참여자의 음성이
        <br />
        정상적으로 등록되었습니다
      </Text>
      <OkButton onClick={() => push({ url: "/" })} alignItems="center" />
    </Stack>
  );
};

export default EnrollStep3;
