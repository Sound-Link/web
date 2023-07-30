import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";
import { OkButton } from "../../components/common/OkButton";
import { NoButton } from "../../components/common/NoButton";

const Enroll = () => {
  const { push, back } = useRouter();

  return (
    <Stack gap="5rem" padding="3rem">
      <Flex gap="1rem" height="3rem" alignItems="center">
        <Image height="100%" src={Images.profileIcon} alt="profile-img" />
        <Text
          fontSize="1.5rem"
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
          color="white"
        >
          김은서님
        </Text>
      </Flex>
      <Center
        width="100%"
        backgroundColor="white"
        borderRadius="25px"
        padding="6rem"
      >
        <Stack gap="3.5rem">
          {/* DB 에 음성 데이터 없을 때는 문구 수정 */}
          <Text
            fontSize="2rem"
            fontFamily="JamsilExtraBold"
            fontWeight="bold"
            textAlign="center"
            color="#414142"
          >
            &apos;김은서&apos;님의 음성을
            <br />
            재등록합니다
          </Text>
          <Flex justifyContent="space-evenly">
            <NoButton onClick={back} />
            <OkButton
              onClick={() =>
                push({
                  url: "/enroll/steps",
                })
              }
            />
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Enroll;
