import React, { useCallback, useState } from "react";
import { Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import { OkButton } from "../../../../components/common/OkButton";
import Images from "../../../../assets/images/Icon";

interface MeetingInviteProps {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
  setOnNaming: React.Dispatch<React.SetStateAction<boolean>>;
}

const MeetingInvite: React.FC<MeetingInviteProps> = ({
  selectedIds,
  setSelectedIds,
  setOnNaming,
}) => {
  const [selectedKeyword, setSelectedKeyword] = useState("");

  const onClickCheckIcon = useCallback(
    (id: string) => () => {
      if (selectedIds.includes(id)) {
        setSelectedIds(prev => prev.filter(value => value !== id));
      } else {
        setSelectedIds(prev => prev.concat(id));
      }
    },
    [selectedIds, setSelectedIds],
  );

  const onChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedKeyword(e.target.value);
    },
    [],
  );

  const onClickConfirm = useCallback(() => {
    setOnNaming(true);
  }, []);

  return (
    <Stack
      flex="1"
      width="100%"
      padding="1.5rem"
      border="1px solid white"
      justifyContent="space-between"
    >
      <Stack flex="1" gap="1.5rem">
        <Text
          textAlign="center"
          fontFamily="JamsilExtraInfo"
          fontWeight="extrabold"
          fontSize="1.5rem"
          color="white"
        >
          대화 상대 초대
        </Text>
        <Input
          height="3.5rem"
          placeholder="이름, 전화번호 검색"
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
          fontSize="1.2rem"
          color="#888888"
          border="0"
          focusBorderColor="transparent"
          backgroundColor="#B7BABB"
          borderRadius="0"
          _placeholder={{ color: "#888888" }}
          value={selectedKeyword}
          onChange={onChangeKeyword}
        />
        <Stack flex="1" gap="1rem" padding="1rem">
          {/* Friends List */}
          <Flex justifyContent="space-between">
            <Flex gap="1rem" alignItems="center">
              <Flex width="3rem" height="3rem">
                <Image src={Images.profileIcon} alt="profile-img" />
              </Flex>
              <Text
                fontFamily="JamsilExtraInfo"
                fontWeight="extrabold"
                fontSize="1.5rem"
                color="white"
              >
                TEST NAME
              </Text>
            </Flex>
            <Flex width="2rem" height="2rem" onClick={onClickCheckIcon("1")}>
              <Image
                src={
                  selectedIds.includes("1")
                    ? Images.checkIcon
                    : Images.emptyCheckIcon
                }
                alt="check-icon"
              />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
      <OkButton onClick={onClickConfirm} alignSelf="flex-end" />
    </Stack>
  );
};

export default MeetingInvite;
