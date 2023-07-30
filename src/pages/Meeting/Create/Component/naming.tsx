import React, { useCallback } from "react";
import { Center, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import { OkButton } from "../../../../components/common/OkButton";
import Images from "../../../../assets/images/Icon";

interface MeetingNamingProps {
  selectedName: string;
  setSelectedName: React.Dispatch<React.SetStateAction<string>>;
  createRoom: () => void;
}

const MeetingNaming: React.FC<MeetingNamingProps> = ({
  selectedName,
  setSelectedName,
  createRoom,
}) => {
  const onChangName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedName(e.target.value);
  }, []);

  const onClickConfirm = useCallback(() => {
    createRoom();
  }, []);

  return (
    <Stack
      flex="1"
      width="100%"
      padding="1.5rem"
      border="1px solid white"
      justifyContent="space-between"
    >
      <Stack flex="1" gap="1.5rem" alignItems="center">
        <Text
          textAlign="center"
          fontFamily="JamsilExtraInfo"
          fontWeight="extrabold"
          fontSize="1.5rem"
          color="white"
        >
          회의 정보 설정
        </Text>
        <Center gap="1rem" flex="1" flexDirection="column" width="100%">
          <Center width="15rem" height="15rem">
            <Image src={Images.groupIcon} alt="group-icon" />
          </Center>
          <Input
            height="3.5rem"
            placeholder="채팅방 이름 설정"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            fontSize="1.2rem"
            color="#888888"
            border="0"
            focusBorderColor="transparent"
            backgroundColor="#B7BABB"
            borderRadius="0"
            _placeholder={{ color: "#888888" }}
            value={selectedName}
            onChange={onChangName}
          />
        </Center>
      </Stack>
      <OkButton alignSelf="flex-end" onClick={onClickConfirm} />
    </Stack>
  );
};

export default MeetingNaming;
