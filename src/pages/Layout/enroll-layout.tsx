import React from "react";
import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";

const EnrollLayout = () => {
  const { push } = useRouter();

  return (
    <Stack width="100%" height="100%" bgColor="bgColor.gray">
      <Center padding="1rem">
        <Text
          color="fontColor.gray"
          fontSize="1.5rem"
          fontFamily="JamsilExtraBold"
          fontWeight="bold"
        >
          SOUNDLINK
        </Text>
      </Center>
      <Flex width="100%" flex="1">
        <Outlet />
      </Flex>
    </Stack>
  );
};

export default EnrollLayout;
