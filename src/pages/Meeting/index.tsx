import { Button, Center, Stack } from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";

const Meeting = () => {
  const { push } = useRouter();

  return (
    <Stack>
      <Center>Meeting</Center>
      <Center>
        <Button
          onClick={() =>
            push({
              url: "/meeting/chat",
            })
          }
          background="gradient.button"
        >
          Chatting Room
        </Button>
      </Center>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense> */}
    </Stack>
  );
};

export default Meeting;
