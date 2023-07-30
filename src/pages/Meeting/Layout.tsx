import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Images from "../../assets/images/Icon";
import { useRouter } from "../../hooks/useRouter";

const Header = () => {
  const { push } = useRouter();
  return (
    <Flex
      as="header"
      gap="0.9rem"
      position="absolute"
      top="1.7rem"
      right="3.5rem"
    >
      <Box
        role="link"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        backgroundSize="cover"
        backgroundImage={Images.enrollIcon}
        onClick={() => push({ url: "/enroll" })}
      />
      <Box
        role="link"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        backgroundSize="cover"
        backgroundImage={Images.createIcon}
        onClick={() => push({ url: "/meeting/create" })}
      />
    </Flex>
  );
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      width="100%"
      height="100%"
      backgroundImage={Images.meetingBackground}
      backgroundSize="100%"
    >
      <Header />
      {children}
    </Flex>
  );
};
