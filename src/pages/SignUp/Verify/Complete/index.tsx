import { Flex, Text } from "@chakra-ui/react";
import { TopImageLayout } from "../../../Layout/TopImageLayout";
import { OkButton } from "../../../../components/common/OkButton";
import { useRouter } from "../../../../hooks/useRouter";
import { USER_PHONE_NUMBER, useAuth } from "../../../../hooks/useAuth";

export const CompletePage = () => {
  const { push, query } = useRouter();
  useAuth();
  const handleComplete = () => {
    localStorage.setItem(USER_PHONE_NUMBER, query.phoneNumber ?? "");
    push({ url: "/" });
  };

  return (
    <TopImageLayout>
      <Flex
        bgColor="bgColor.gray2"
        paddingTop="6.2rem"
        paddingBottom="4.2rem"
        px="7.8rem"
        direction="column"
        borderRadius="2.5rem"
        align="center"
        gap="1.9rem"
      >
        <Text
          textAlign="center"
          fontSize="2rem"
          fontWeight={500}
          whiteSpace="pre-wrap"
        >
          {"가입/로그인이\n정상적으로\n처리되었습니다"}
        </Text>
        <OkButton onClick={handleComplete} />
      </Flex>
    </TopImageLayout>
  );
};
