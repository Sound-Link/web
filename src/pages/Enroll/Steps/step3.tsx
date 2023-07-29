import React from "react";
import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "../../../hooks/useRouter";

const EnrollStep3: React.FC = () => {
  const { push } = useRouter();

  return (
    <Stack
      spacing={10}
      alignItems="center"
      padding="2rem"
      marginTop="3rem"
      width="100%"
    >
      <Center
        width="15rem"
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
        fontSize="1rem"
        fontFamily="JamsilMedium"
        fontWeight="semibold"
        textAlign="center"
      >
        참여자의 음성이
        <br />
        정상적으로 등록되었습니다
      </Text>
      <Center>
        <Button
          onClick={() => push({ url: "/" })}
          background="gradient.button"
          size="lg"
        >
          <Text
            fontFamily="JamsilExtraBold"
            fontWeight="extrabold"
            fontSize="1.5rem"
            color="#414142"
          >
            OK
          </Text>
        </Button>
      </Center>
    </Stack>
  );
};

export default EnrollStep3;
