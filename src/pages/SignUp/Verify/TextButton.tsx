import { Text, TextProps } from "@chakra-ui/react";

export const TextButton = (props: TextProps) => {
  return (
    <Text
      {...props}
      as="button"
      color="fontColor.gray2"
      fontWeight={500}
      fontSize="1.5rem"
      textDecorationLine="underline"
    />
  );
};
