import { useState } from "react";
import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import { Modal } from "../../components/common/modal";
import Images from "../../assets/images/Icon";

export const DetailLayout = () => {
  const { push } = useRouter();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <Stack
      width="100%"
      height="100%"
      bgColor="bgColor.gray"
      paddingTop="env(safe-area-inset-top)"
    >
      <Center padding="1.5rem">
        <Stack gap="1rem" direction="row" position="absolute" left="3rem">
          <Flex
            width="3rem"
            height="3rem"
            borderRadius="50%"
            borderStyle="solid"
            borderWidth="0.1rem"
            borderColor="gradient.button"
            backgroundSize="cover"
            justify="center"
            align="center"
            onClick={() => setIsSettingOpen(true)}
          >
            ⚙
          </Flex>
        </Stack>
        <Text
          color="fontColor.gray"
          fontSize="2rem"
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
        >
          SOUNDLINK
        </Text>
        <Stack gap="1rem" direction="row" position="absolute" right="3rem">
          {/* <Flex
            width="3rem"
            height="3rem"
            borderRadius="50%"
            backgroundSize="cover"
            backgroundImage={Images.createIcon}
            onClick={() =>
              push({
                url: "/meeting/create",
              })
            }
          /> */}
          <Box css={{ color: "white" }}>삭제 버튼</Box>
        </Stack>
      </Center>
      <Box flex="1">
        <Outlet />
      </Box>
      <Modal isOpen={isSettingOpen} onClose={() => setIsSettingOpen(false)} />
    </Stack>
  );
};
