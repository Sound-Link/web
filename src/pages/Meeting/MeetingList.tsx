import { Flex } from "@chakra-ui/react";
import { MeetingItem } from "./MeetingItem";
import { useGetUser } from "../../api/user";
import { useRoomList } from "./queries/useRoomList";

export const MeetingList = () => {
  useGetUser();
  const { data } = useRoomList();

  return (
    <Flex
      height="100%"
      width="100%"
      paddingTop="8.2rem"
      direction="column"
      gap="3.6rem"
      px="2.2rem"
      as="ol"
    >
      {data?.data.map(item => <MeetingItem key={item.id} {...item} />)}
    </Flex>
  );
};
