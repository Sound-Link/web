import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const EnrollLayout = () => {
  useAuth();

  return (
    <Stack width="100%" height="100%" bgColor="bgColor.gray">
      <Center padding="1.5rem">
        <Text
          color="fontColor.gray"
          fontSize="2rem"
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
