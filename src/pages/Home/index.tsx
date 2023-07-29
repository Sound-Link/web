import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";

const Home = () => {
  const { push } = useRouter();

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
          친구 1명
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
            김은서
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default Home;
