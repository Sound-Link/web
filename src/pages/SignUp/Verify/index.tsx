import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NoButton } from "../../../components/common/NoButton";
import { OkButton } from "../../../components/common/OkButton";
import { TopImageLayout } from "../../Layout/TopImageLayout";
import { useRouter } from "../../../hooks/useRouter";
import { InputGroup } from "./InputGroup";
import { TextButton } from "./TextButton";
import { useAuth } from "../../../hooks/useAuth";
import { useVerify } from "../queries/useVerify";
import { useSendPhone } from "../queries/useSendPhone";

export const VerifyPage = () => {
  useAuth();
  const { back, push, query } = useRouter();
  const { phoneNumber } = query as { [key: string]: string };
  const [verifyValue, setVerifyValue] = useState("");
  const { mutate: reRequest } = useSendPhone();
  const { mutate } = useVerify({
    onSuccess: () =>
      push({
        url: `/signUp/verify/complete/${phoneNumber}`,
      }),
  });
  const handleVerify = () => {
    // TODO: Change to original logic
    if (verifyValue.length !== 6) return;
    // mutate(Number(verifyValue));
    push({
      url: `/signUp/verify/complete/${phoneNumber}`,
    });
  };

  return (
    <TopImageLayout>
      <Flex direction="column" gap="1.9rem">
        <Flex direction="column" gap="3.5rem">
          <Text
            fontSize="3rem"
            textAlign="center"
            color="fontColor.gray2"
            whiteSpace="pre-wrap"
            fontWeight={700}
          >
            {"인증번호를\n입력해주세요"}
          </Text>
          <InputGroup
            setVerifyValue={setVerifyValue}
            verifyValue={verifyValue}
          />
        </Flex>
        <Flex direction="column" align="flex-start" gap="0.3rem">
          <TextButton onClick={() => reRequest(phoneNumber)}>
            인증번호 다시받기
          </TextButton>
          <TextButton>고객센터 연락하기</TextButton>
        </Flex>
      </Flex>
      <Flex
        position="fixed"
        w="100%"
        px="3.6rem"
        bottom="0"
        py="4.5rem"
        justify="space-between"
      >
        <NoButton onClick={() => back()} />
        <OkButton onClick={handleVerify} />
      </Flex>
    </TopImageLayout>
  );
};
