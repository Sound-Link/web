import { Flex } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { MeetingItem } from "./MeetingItem";

const MOCKING_DATA = [
  {
    date: "2023.07.04",
    title: "제목1",
    lastContents: "내용1",
    id: 1,
  },
  {
    date: "2023.07.04",
    title: "제목2",
    lastContents: "내용2",
    id: 2,
  },
  {
    date: "2023.07.04",
    title: "제목3",
    lastContents: "내용3",
    id: 3,
  },
] as const;

const Meeting = () => {
  return (
    <Layout>
      <Flex
        height="100%"
        width="100%"
        paddingTop="8.2rem"
        direction="column"
        gap="3.6rem"
        px="2.2rem"
        as="ol"
      >
        {MOCKING_DATA.map(item => (
          <MeetingItem key={item.id} {...item} />
        ))}
      </Flex>
    </Layout>
  );
};

export default Meeting;
