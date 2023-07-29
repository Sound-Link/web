import { Flex, Image, Text, FlexProps } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";
import { Button } from "./Button";
import { useRouter } from "../../hooks/useRouter";
import { TopImageLayout } from "../Layout/TopImageLayout";
import { useAuth } from "../../hooks/useAuth";

const FlexColumnJustifyAlignCenter = (props: FlexProps) => (
  <Flex {...props} direction="column" align="center" justify="center" />
);

const SignIn = () => {
  const { push } = useRouter();
  useAuth();

  return (
    <TopImageLayout>
      <FlexColumnJustifyAlignCenter gap="5rem">
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
              })
            }
            role="link"
            aria-label="시작하기"
          >
            <Text fontSize="1.5rem" fontFamily="JamsilMedium">
              시작하기
            </Text>
          </Button>
        </FlexColumnJustifyAlignCenter>
      </FlexColumnJustifyAlignCenter>
    </TopImageLayout>
  );
};

export default SignIn;
