import {
  Checkbox as CommonCheckBox,
  CheckboxProps as CommonCheckBoxProps,
  Flex,
  Text,
} from "@chakra-ui/react";

interface CheckBoxProps extends CommonCheckBoxProps {
  label: string;
}

export const CheckBox = ({ label, ...rest }: CheckBoxProps) => {
  return (
    <Flex align="center" gap="1rem">
      <CommonCheckBox
        colorScheme="bgColor.gray2"
        iconColor="color.gray5"
        bg="bgColor.gray2"
        width="1.7rem"
        height="1.7rem"
        display="flex"
        padding="0"
        justifyContent="center"
        css={{
          "& > span > div > svg": {
            width: "1.1rem",
          },
        }}
        {...rest}
      />
      <Text fontSize="1.7rem" color="fontColor.gray2" as="label">
        {label}
      </Text>
    </Flex>
  );
};
