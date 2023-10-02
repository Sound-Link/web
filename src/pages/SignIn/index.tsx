import { Flex, Image, Text, FlexProps } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";
import { Button } from "./Button";
import { TopImageLayout } from "../Layout/TopImageLayout";
import { useAuth } from "../../hooks/useAuth";

const CLIENT_ID = "8d14be00636c3c6f065f37e3ea715cb4";

const FlexColumnJustifyAlignCenter = (props: FlexProps) => (
  <Flex {...props} direction="column" align="center" justify="center" />
);

const SignIn = () => {
  useAuth();

  return (
    <TopImageLayout>
      <FlexColumnJustifyAlignCenter gap="5rem">
        <FlexColumnJustifyAlignCenter gap="3rem">
          <Image src={Images.doubleLogoIcon} height="13.7rem" />
          <Text
            textColor="fontColor.gray2"
            fontFamily="JamsilMedium"
            fontSize="1.5rem"
            fontWeight={500}
          >
            welcome
          </Text>
        </FlexColumnJustifyAlignCenter>
        <FlexColumnJustifyAlignCenter gap="2rem">
          <Button role="link" aria-label="시작하기">
            <Text fontSize="1.5rem" fontFamily="JamsilMedium">
              <a
                href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECTURI}`}
              >
                카카오로그인
              </a>
            </Text>
          </Button>
        </FlexColumnJustifyAlignCenter>
      </FlexColumnJustifyAlignCenter>
    </TopImageLayout>
  );
};

export default SignIn;
