import { Button, Center, Stack } from "@chakra-ui/react";

const MeetingChat = () => {
  return (
    <Stack>
      <Center>Meeting</Center>
      <Center>
        {/* <Button
          onClick={() =>
            push({
              url: "/meeting/chat",
            })
          }
          background="gradient.button"
        >
          Chatting Room
        </Button> */}
      </Center>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense> */}
    </Stack>
  );
};

export default MeetingChat;
