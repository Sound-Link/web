import React from "react";
import { Button, Center, Flex, Progress, Stack, Text } from "@chakra-ui/react";
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
      <Flex width="80%" height="7rem" borderRadius="0.5rem" position="relative">
        {/* TODO: ProgressBar 수정 */}
        <Progress
          width="100%"
          height="100%"
          bg="gradient.button"
          padding="0.2rem"
          borderRadius="0.5rem"
          value={0}
          transform="rotate( 180deg )"
          transition="all 0.5s"
          isAnimated
        />
      </Flex>

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
