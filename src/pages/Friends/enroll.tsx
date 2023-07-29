import React, { useCallback } from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "../../hooks/useRouter";

interface FriendsEnrollProps {
  nickName: string;
  phoneNumber: string;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const FriendsEnroll: React.FC<FriendsEnrollProps> = ({
  nickName,
  phoneNumber,
  setStatus,
  setNickName,
  setPhoneNumber,
}) => {
  const { push } = useRouter();

  const onChangNickNameInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickName(e.target.value);
    },
    [],
  );
  const onChangPhoneNumberInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    },
    [],
  );
  const onClickSubmit = useCallback(() => {
    // TODO: Check PhoneNumber And Register
    // if fail -> Fail Notice
    // if success -> setStatus(true)
    setStatus(true);
  }, []);

  return (
    <Stack
      gap="2rem"
      padding="2rem"
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      <Text textAlign="center" fontSize="1rem" color="white">
        친구를 등록하시겠습니까?
      </Text>
      <Stack
        width="100%"
        gap="3rem"
        padding="1.5rem"
        border="1px solid #C1BEBE"
      >
        <Stack gap="0rem">
          <Input
            placeholder="NAME"
            fontSize="1rem"
            color="fontColor.gray"
            border="0"
            focusBorderColor="transparent"
            textAlign="center"
            _placeholder={{ color: "#C1BEBE", textAlign: "center" }}
            onChange={onChangNickNameInput}
          />
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
          <Input
            placeholder="PHONE NUMBER"
            fontSize="1rem"
            color="fontColor.gray"
            border="0"
            focusBorderColor="transparent"
            textAlign="center"
            _placeholder={{ color: "#C1BEBE", textAlign: "center" }}
            onChange={onChangPhoneNumberInput}
          />
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
        </Stack>
        <Button
          onClick={onClickSubmit}
          size="md"
          alignSelf="flex-end"
          height="2rem"
          background="gradient.button"
          fontSize="1.2rem"
          color="white"
        >
          OK
        </Button>
      </Stack>
    </Stack>
  );
};

export default FriendsEnroll;
