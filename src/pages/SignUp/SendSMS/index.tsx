import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "../../../hooks/useRouter";
import { NoButton } from "../../../components/common/NoButton";
import { OkButton } from "../../../components/common/OkButton";
import { TopImageLayout } from "../../Layout/TopImageLayout";
import { useAuth } from "../../../hooks/useAuth";

export const SendSMS = () => {
  const { query, back, push } = useRouter();
  useAuth();
  const { phoneNumber } = query as { [key: string]: string };

  const handleSendSMS = () => {
    console.log("sendSMS");
    push({
      url: `/signUp/verify/${phoneNumber}`,
    });
  };

  return (
    <TopImageLayout>
      <Flex
        px="4.3rem"
        py="3.7rem"
        height="fit-content"
        width="fit-content"
        bg="bgColor.gray2"
        borderRadius="2.5rem"
        direction="column"
        align="center"
        textAlign="center"
        gap="1rem"
      >
        <Text fontSize="3rem" fontWeight={700}>
          {phoneNumber}
        </Text>
        <Text whiteSpace="pre-wrap" fontSize="3rem" fontWeight={700}>
          {"위 번호로 SNS\n인증번호를\n보냅니다."}
        </Text>
        <Flex gap="1.2rem">
          <NoButton onClick={back} />
          <OkButton onClick={handleSendSMS} />
        </Flex>
      </Flex>
    </TopImageLayout>
  );
};
