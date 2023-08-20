import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "../../../hooks/useRouter";
import { NoButton } from "../../../components/common/NoButton";
import { OkButton } from "../../../components/common/OkButton";
import { TopImageLayout } from "../../Layout/TopImageLayout";
import { useAuth } from "../../../hooks/useAuth";
import { useSendPhone } from "../queries/useSendPhone";

export const SendSMS = () => {
  const { query, back, push } = useRouter();
  useAuth();
  const { phoneNumber, username } = query as { [key: string]: string };

  const { mutate } = useSendPhone({
    onSuccess: () => {
      push({
        url: `/signUp/verify/${phoneNumber}`,
        params: {
          username: decodeURIComponent(username),
        },
      });
    },
    onError: () => {
      localStorage.setItem("userPhoneNumber", "12312312");
      push({ url: "/meeting/detail/123aa" });
    },
  });

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
          <OkButton onClick={() => mutate(phoneNumber)} />
        </Flex>
      </Flex>
    </TopImageLayout>
  );
};
