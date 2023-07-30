import React, { useCallback } from "react";
import { Box, Input, Stack, Text } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import { OkButton } from "../../../components/common/OkButton";

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
    // TODO: Check PhoneNumber And Register API
    // TODO: Loading Check During Awating API
    // console.log(nickName, phoneNumber);
    // if fail -> Fail Notice
    // if success -> setStatus(true)
    setStatus(true);
  }, []);

  return (
    <Stack
      gap="3rem"
      padding="3.5rem"
      alignItems="center"
      justifyContent="center"
      width="100%"
      margin="auto"
    >
      <Text
        textAlign="center"
        fontFamily="JamsilMedium"
        fontWeight="medium"
        fontSize="1.5rem"
        color="white"
      >
        친구를 등록하시겠습니까?
      </Text>
      <Stack width="100%" gap="3rem" padding="2rem" border="1px solid #C1BEBE">
        <Stack gap="1rem" margin="1rem 0rem">
          <Input
            placeholder="NAME"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            fontSize="1.5rem"
            color="fontColor.gray"
            border="0"
            focusBorderColor="transparent"
            textAlign="center"
            _placeholder={{ color: "#C1BEBE", textAlign: "center" }}
            value={nickName}
            onChange={onChangNickNameInput}
          />
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
          <Input
            placeholder="PHONE NUMBER"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            fontSize="1.5rem"
            color="fontColor.gray"
            border="0"
            focusBorderColor="transparent"
            textAlign="center"
            _placeholder={{ color: "#C1BEBE", textAlign: "center" }}
            value={phoneNumber}
            onChange={onChangPhoneNumberInput}
          />
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
        </Stack>
        <OkButton alignSelf="flex-end" onClick={onClickSubmit} />
      </Stack>
    </Stack>
  );
};

export default FriendsEnroll;
