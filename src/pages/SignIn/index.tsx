import { Flex, Image, Text, FlexProps } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";
import { Button } from "./Button";
import { TopImageLayout } from "../Layout/TopImageLayout";
import { useAuth } from "../../hooks/useAuth";

const FlexColumnJustifyAlignCenter = (props: FlexProps) => (
  <Flex {...props} direction="column" align="center" justify="center" />
);

const SignIn = () => {
  useAuth();

  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      // redirectUri: "http://localhost:3000/signIn",
      // redirectUri: "https://web-sound-link-web.vercel.app/signIn",
      redirectUri: process.env.REACT_APP_REDIRECTURI,
    });
  };

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
          <Button onClick={handleKakaoLogin} role="link" aria-label="시작하기">
            <Text fontSize="1.5rem" fontFamily="JamsilMedium">
              카카오로그인
            </Text>
          </Button>
        </FlexColumnJustifyAlignCenter>
      </FlexColumnJustifyAlignCenter>
    </TopImageLayout>
  );
};

export default SignIn;
