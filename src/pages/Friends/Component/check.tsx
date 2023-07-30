import React, { useCallback } from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "../../../hooks/useRouter";
import Images from "../../../assets/images/Icon";
import { OkButton } from "../../../components/common/OkButton";

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
        친구의 정보가 업로드 되었습니다.
      </Text>
      <Stack width="100%" gap="3rem" padding="2rem" border="1px solid #C1BEBE">
        <Stack gap="1rem" alignItems="center">
          <Flex width="4rem" height="4rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            fontSize="1.2rem"
            color="white"
          >
            {nickName}
          </Text>
          <Box backgroundColor="#C1BEBE" width="100%" height="2px" />
        </Stack>
        <OkButton alignSelf="flex-end" onClick={onClickConfirm} />
      </Stack>
    </Stack>
  );
};

export default FriendsCheck;
