import React, { useCallback } from "react";
import { Box, Button, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";

interface FriendsEnrollProps {
  nickName: string;
}

const FriendsCheck: React.FC<FriendsEnrollProps> = ({ nickName }) => {
  const { push } = useRouter();

  const onClickConfirm = useCallback(() => {
    push({
      url: "/",
    });
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
      <Text
        textAlign="center"
        fontFamily="JamsilBold"
        fontSize="1rem"
        color="white"
      >
        친구의 정보가 업로드 되었습니다.
      </Text>
      <Stack
        width="100%"
        gap="3rem"
        padding="1.5rem"
        border="1px solid #C1BEBE"
      >
        <Stack gap="1rem" alignItems="center">
          <Flex width="2rem" height="2rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilBold"
            fontSize="1rem"
            color="white"
          >
            이정민
          </Text>
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
        </Stack>
        <Button
          onClick={onClickConfirm}
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

export default FriendsCheck;
