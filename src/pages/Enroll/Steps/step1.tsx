import React, { useState, useEffect } from "react";
import { Center, Image, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Images from "../../../assets/images/Icon";

const totalTime = 10;
const intervalTime = 5;

const CustomedCenter = styled(Center)`
  opacity: 0;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
  }
`;

interface EnrollStep1Props {
  nextStep: () => void;
}

const EnrollStep1: React.FC<EnrollStep1Props> = ({ nextStep }) => {
  const [time, setTime] = useState<number>(totalTime);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      nextStep();
    }
  }, [time]);

  return (
    <Stack
      spacing={5}
      alignItems="center"
      padding="2rem"
      marginTop="3rem"
      width="100%"
    >
      <Image src={Images.enrollLoading} alt="gif-img" width="80%" />
      {time > intervalTime && (
        <CustomedCenter
          height="10rem"
          className={time > intervalTime + 1 ? "active" : ""}
        >
          <Text
            color="fontColor.gray"
            fontSize="1.5rem"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
          >
            환영합니다
          </Text>
        </CustomedCenter>
      )}
      {time <= intervalTime + 1 && (
        <CustomedCenter
          height="10rem"
          className={time <= intervalTime ? "active" : ""}
        >
          <Text
            color="fontColor.gray"
            fontSize="1.5rem"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            textAlign="center"
          >
            지금부터 사용자의
            <br />
            음성등록을 시작하겠습니다
          </Text>
        </CustomedCenter>
      )}
    </Stack>
  );
};

export default EnrollStep1;
