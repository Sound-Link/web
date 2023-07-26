import { Flex, Image, Text, FlexProps } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";
import { Button } from "./Button";
import { useRouter } from "../../hooks/useRouter";

const FlexColumnJustifyAlignCenter = (props: FlexProps) => (
  <Flex {...props} direction="column" align="center" justify="center" />
);

const SignIn = () => {
  const { push } = useRouter();

  return (
    <FlexColumnJustifyAlignCenter bg="bgColor.gray" h="full" gap="5rem">
      <FlexColumnJustifyAlignCenter gap="3rem">
        <Image src={Images.signInIcon} height="13.7rem" />
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
        <Button
          onClick={() =>
            push({
              url: "/signUp",
              params: {
                a: 1,
                b: 2,
              },
            })
          }
          role="link"
          aria-label="회원가입하러 가기"
        >
          <Text fontSize="1.5rem" fontFamily="JamsilMedium">
            sign up
          </Text>
        </Button>
        <Button role="link" aria-label="로그인하러 가기">
          <Text fontSize="1.5rem" fontFamily="JamsilMedium">
            Log in
          </Text>
        </Button>
      </FlexColumnJustifyAlignCenter>
    </FlexColumnJustifyAlignCenter>
  );
};

export default SignIn;
