import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";

interface MeetingItemProps {
  title: string;
  lastContents: string;
  date: string;
  id: number;
}

export const MeetingItem = ({
  date,
  lastContents,
  title,
  id,
}: MeetingItemProps) => {
  const { push } = useRouter();

  return (
    <Box
      position="relative"
      as="li"
      border="0.1rem solid transparent"
      background="borderColor.gradient"
      padding="0.1rem"
      listStyleType="none"
      borderRadius="1rem"
    >
      <Flex
        as="a"
        onClick={() => push({ url: `/meeting/${id}` })}
        bgColor="bgColor.gray"
        width="100%"
        height="100%"
        borderRadius="1rem"
        py="1.5rem"
        px="1.1rem"
      >
        <Text
          color="fontColor.gray2"
          position="absolute"
          fontWeight={500}
          top="-2.5rem"
          fontSize="1.3rem"
        >
          {title}
        </Text>
        <Flex justify="space-between" width="100%">
          <Text color="color.gray6">{lastContents}</Text>
          <Text color="color.gray6">{date}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
