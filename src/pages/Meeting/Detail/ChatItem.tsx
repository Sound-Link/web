import { Box, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import { ReactNode } from "react";

interface ChatItemProps {
  children: ReactNode;
  createdAt: string;
}

export const ChatItem = ({ children, createdAt }: ChatItemProps) => {
  return (
    <Flex direction="column" color="fontColor.gray" align="flex-end">
      <Box
        fontSize="1.8rem"
        borderStyle="solid"
        borderWidth="0.1rem"
        p="1rem"
        borderColor="fontColor.gray"
        width="100%"
      >
        {children}
      </Box>
      <Box fontSize="1rem">{dayjs(createdAt).format("YYYY.MM.DD")}</Box>
    </Flex>
  );
};
