import { Box, Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "../../hooks/useRouter";

interface MeetingItemProps {
  name: string;
  created_at: string;
  id: number;
}

export const MeetingItem = ({ created_at, name, id }: MeetingItemProps) => {
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
        onClick={() => push({ url: `/meeting/detail/${id}` })}
        bgColor="bgColor.gray"
        width="100%"
        height="100%"
        borderRadius="1rem"
        py="1.5rem"
        px="1.1rem"
      >
        <Flex justify="space-between" width="100%">
          <Text color="color.gray6">{name}</Text>
          <Text color="color.gray6">
            {dayjs(created_at).format("YYYY.MM.DD")}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
