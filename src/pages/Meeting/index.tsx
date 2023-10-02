import { Suspense } from "react";
import { Flex, Skeleton } from "@chakra-ui/react";
import { MeetingList } from "./MeetingList";

const Meeting = () => {
  // TODO: 이거 주석
  // localStorage.setItem("email", "dos07008@naver.com");

  return (
    <Suspense
      fallback={
        <Flex
          direction="column"
          width="100%"
          paddingTop="8.2rem"
          gap="3.6rem"
          px="2.2rem"
        >
          <Skeleton borderRadius="1rem" width="100%" height="4.9rem" />
          <Skeleton borderRadius="1rem" width="100%" height="4.9rem" />
          <Skeleton borderRadius="1rem" width="100%" height="4.9rem" />
        </Flex>
      }
    >
      <MeetingList />
    </Suspense>
  );
};

export default Meeting;
