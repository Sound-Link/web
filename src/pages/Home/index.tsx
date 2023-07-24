import { Button, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Suspense } from "react";
import { useRouter } from "../../hooks/useRouter";
import Test from "./Test";

const Home = () => {
  const { push } = useRouter();
  //   const test = useLocation();

  return (
    <Stack>
      <Center>Home</Center>
      <Center>
        <Button
          onClick={() =>
            push({
              url: "/meeting",
            })
          }
          background="gradient.button"
        >
          Meeting Room
        </Button>
      </Center>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense> */}
    </Stack>
  );
};

export default Home;
