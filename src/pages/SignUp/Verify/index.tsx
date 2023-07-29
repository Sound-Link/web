import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { NoButton } from "../../../components/common/NoButton";
import { OkButton } from "../../../components/common/OkButton";
import { TopImageLayout } from "../../Layout/TopImageLayout";
import { useRouter } from "../../../hooks/useRouter";
import { InputGroup } from "./InputGroup";
import { TextButton } from "./TextButton";

export const VerifyPage = () => {
  const { back, push } = useRouter();
  const [verifyValue, setVerifyValue] = useState("");
  const handleVerify = () => {
    if (verifyValue.length !== 4) return;
    console.log("verify");
    push({
      url: "/signUp/verify/complete",
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
          <TextButton>인증번호 다시받기</TextButton>
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
