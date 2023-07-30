import { Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import { InputWithClear } from "../../components/common/InputWithClear";
import { CheckBox } from "./CheckBox";
import { OkButton } from "../../components/common/OkButton";
import { TopImageLayout } from "../Layout/TopImageLayout";
import { useAuth } from "../../hooks/useAuth";

const SignUp = () => {
  useAuth();
  const { push } = useRouter();
  const [formState, setFormState] = useState({
    phoneNumber: "",
    isAgreeAge14Over: false,
    isAgreeTerms: false,
  });

  const handleClear = () =>
    setFormState(prev => ({ ...prev, phoneNumber: "" }));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: name === "phoneNumber" ? value : checked,
    }));
  };

  const handleNextStep = () => {
    if (!Object.values(formState).every(v => v)) return;
    push({
      url: `/signUp/sendSMS/${formState.phoneNumber}`,
    });
  };

  return (
    <TopImageLayout>
      <Flex
        marginBottom="1rem"
        justify="center"
        align="center"
        gap="3.9rem"
        flexDirection="column"
      >
        <Text
          textAlign="center"
          whiteSpace="pre-wrap"
          fontSize="3rem"
          color="fontColor.gray2"
          fontWeight={700}
        >
          {"기기 전화번호를 \n입력해주세요"}
        </Text>
        <Flex direction="column" gap="2.3rem">
          <InputWithClear
            type="tel"
            value={formState.phoneNumber}
            onClear={handleClear}
            fontSize="2rem"
            fontWeight={500}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="PHONE NUMBER"
          />
          <Flex direction="column">
            <CheckBox
              name="isAgreeAge14Over"
              onChange={handleChange}
              isChecked={formState.isAgreeAge14Over}
              label="만 14세 이용 가능한 플랫폼입니다"
            />
            <CheckBox
              name="isAgreeTerms"
              onChange={handleChange}
              label="이용약관에 동의합니다"
              isChecked={formState.isAgreeTerms}
            />
          </Flex>
        </Flex>
        <OkButton
          position="fixed"
          right="3.5rem"
          bottom="4.5rem"
          onClick={handleNextStep}
        />
      </Flex>
    </TopImageLayout>
  );
};

export default SignUp;
