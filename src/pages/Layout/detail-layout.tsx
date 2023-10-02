import { useState } from "react";
import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import { Modal } from "../../components/common/modal";
import Images from "../../assets/images/Icon";
import { DeleteModal } from "../../components/common/DeleteModal";

export const DetailLayout = () => {
  const { push } = useRouter();
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

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
            color="fontColor.gray"
            fontSize="1.3rem"
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
            fontSize="2rem"
            color="fontColor.gray"
            onClick={() => setIsDeleteOpen(true)}
          >
            ✖
          </Flex>
        </Stack>
      </Center>
      <Box flex="1">
        <Outlet />
      </Box>
      <Modal isOpen={isSettingOpen} onClose={() => setIsSettingOpen(false)} />
      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
    </Stack>
  );
};
