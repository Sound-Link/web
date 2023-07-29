import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";

const Home = () => {
  const { push } = useRouter();

  return (
    <Stack padding="1rem">
      <Flex gap="1rem" alignItems="center" padding="1rem">
        <Flex width="2rem" height="2rem">
          <Image src={Images.profileIcon} alt="profile-img" />
        </Flex>
        <Text
          textAlign="center"
          fontFamily="JamsilBold"
          fontSize="1rem"
          color="white"
        >
          김은서
        </Text>
      </Flex>
      <Text fontFamily="JamsilBold" fontSize="1rem" color="fontColor.gray">
        친구 n명
      </Text>
      <Stack gap={0}>
        {/* 친구 리스트 */}
        <Flex gap="1rem" alignItems="center" padding="1rem">
          <Flex width="2rem" height="2rem">
            <Image src={Images.profileIcon} alt="profile-img" />
          </Flex>
          <Text
            textAlign="center"
            fontFamily="JamsilBold"
            fontSize="1rem"
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
