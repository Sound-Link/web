import React, { useCallback } from "react";
import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Images from "../../assets/images/Icon";
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
      <Box flex="1">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default EnrollLayout;
