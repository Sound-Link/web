import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";
import { useUserDetail } from "./queries/useUserDetail";
import { MY_PHONE_NUMBER } from "../../hooks/useAuth";
import { useFriendList } from "./queries/useFriendList";

const Home = () => {
  // const {
  //   data: userInfoData,
  //   isLoading: userInfoIsLoading,
  //   isError: userInfoIsError,
  // } = MY_PHONE_NUMBER
  //   ? useUserDetail(MY_PHONE_NUMBER)
  //   : { data: null, isLoading: null, isError: null };
  // const {
  //   data: friendListData,
  //   isLoading: friendListIsLoading,
  //   isError: friendListIsError,
  // } = MY_PHONE_NUMBER
  //   ? useFriendList(MY_PHONE_NUMBER)
  //   : { data: null, isLoading: null, isError: null };

  return (
    <Stack gap="5rem" padding="2.5rem">
      <Flex gap="1rem" alignItems="center">
        <Flex width="3rem" height="3rem">
          <Image src={Images.profileIcon} alt="profile-img" />
        </Flex>
        <Text
          textAlign="center"
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
          fontSize="1.5rem"
          color="white"
        >
          김은서 님
        </Text>
      </Flex>
      <Stack gap="2rem">
        <Text
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
          fontSize="1.3rem"
          color="fontColor.gray"
        >
          친구 3명
        </Text>
        {/* 친구 리스트 */}
        <Flex gap="1rem" alignItems="center">
          <Flex width="3rem" height="3rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilBold"
            fontSize="1.2rem"
            color="white"
          >
            윤성혁
          </Text>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Flex width="3rem" height="3rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilBold"
            fontSize="1.2rem"
            color="white"
          >
            이승훈
          </Text>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Flex width="3rem" height="3rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilBold"
            fontSize="1.2rem"
            color="white"
          >
            이정민
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Home;
