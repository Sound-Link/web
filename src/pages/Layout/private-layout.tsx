import React from "react";
import { Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Images from "../../assets/images/Icon";
import { useRouter } from "../../hooks/useRouter";

const PrivateLayout = () => {
  const { push } = useRouter();

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
        <Stack gap="1rem" direction="row" position="absolute" right="3rem">
          <Flex
            width="3rem"
            height="3rem"
            borderRadius="50%"
            backgroundSize="cover"
            backgroundImage={Images.enrollIcon}
            onClick={() => push({ url: "/enroll" })}
          />
          <Flex
            width="3rem"
            height="3rem"
            borderRadius="50%"
            backgroundSize="cover"
            backgroundImage={Images.createIcon}
            onClick={() => push({ url: "/meeting/create" })}
          />
        </Stack>
      </Center>
      <Box flex="1">
        <Outlet />
      </Box>
      <Center padding="4rem" justifyContent="space-evenly">
        <Flex
          width="4rem"
          height="4rem"
          borderRadius="50%"
          backgroundSize="cover"
          backgroundImage={Images.friendIcon}
          onClick={() => push({ url: "/friends" })}
        />
        <Flex
          width="4rem"
          height="4rem"
          borderRadius="50%"
          backgroundSize="cover"
          backgroundImage={Images.homeIcon}
          onClick={() => push({ url: "/" })}
        />
        <Flex
          width="4rem"
          height="4rem"
          borderRadius="50%"
          backgroundSize="cover"
          backgroundImage={Images.chatIcon}
          onClick={() => push({ url: "/meeting" })}
        />
      </Center>
    </Stack>
  );
};

export default PrivateLayout;
