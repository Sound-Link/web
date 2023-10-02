import { Flex } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";
import { useRouter } from "../../../hooks/useRouter";
import { useRoomDetail } from "../queries/useRoomDetail";
import { ChatItem } from "./ChatItem";

interface ChatListProps {
  recordData: {
    text: string;
    createAt: string;
    id: string;
  }[];
}

export const ChatList = forwardRef(
  ({ recordData }: ChatListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { query } = useRouter();
    const { data } = useRoomDetail(query.roomId as string, ref as any);

    return (
      <Flex
        direction="column"
        gap="3rem"
        overflowY="auto"
        height="75vh"
        paddingBottom="4rem"
        ref={ref}
        width="100%"
      >
        {data?.map(item => (
          <ChatItem createdAt={item.created_at} key={item.id}>
            {item.text}
          </ChatItem>
        ))}
        {recordData.map(newData => (
          <ChatItem createdAt={newData.createAt} key={newData.id}>
            {newData.text}
          </ChatItem>
        ))}
      </Flex>
    );
  },
);
