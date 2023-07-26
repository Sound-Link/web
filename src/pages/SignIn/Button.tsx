import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      color="color.gray4"
      backgroundColor="bgColor.gray2"
      py="0.95rem"
      px="0"
      width="13rem"
      h="fit-content"
    />
  );
};
