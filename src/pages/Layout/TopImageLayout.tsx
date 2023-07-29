import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Images from "../../assets/images/Icon";

interface TopImageLayoutProps {
  children: ReactNode;
}

export const TopImageLayout = ({ children }: TopImageLayoutProps) => {
  return (
    <Flex
      height="100%"
      backgroundSize="100%"
      backgroundImage={Images.signUpPage}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};
