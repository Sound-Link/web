import { Button, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";

const Enroll = () => {
  const { push } = useRouter();

  return (
    <Stack gap="5rem" padding="2rem">
      <Flex height="2rem" alignItems="center">
        <Image height="100%" src={Images.profileIcon} alt="profile-img" />
        <Text fontSize="1rem" fontFamily="JamsilExtraBold" color="white">
          김은서님
        </Text>
      </Flex>
      <Center
        width="100%"
        backgroundColor="white"
        borderRadius="25px"
        padding="5rem"
      >
        <Stack gap="2rem">
          {/* DB 에 음성 데이터 없을 때는 문구 수정 */}
          <Text
            fontSize="1.2rem"
            fontFamily="JamsilExtraBold"
            textAlign="center"
          >
            &apos;김은서&apos;님의 음성을 재등록합니다
          </Text>
          <Flex justifyContent="space-evenly">
            <Button
              onClick={() =>
                push({
                  url: "/home",
                })
              }
              width="40%"
              height="2rem"
              background="gradient.button"
              fontSize="1.2rem"
              color="white"
            >
              NO
            </Button>
            <Button
              onClick={() =>
                push({
                  url: "/enroll/steps",
                })
              }
              width="40%"
              height="2rem"
              background="gradient.button"
              fontSize="1.2rem"
              color="white"
            >
              OK
            </Button>
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Enroll;
