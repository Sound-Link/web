import { useRouter } from "../../hooks/useRouter";
import { Button } from "@chakra-ui/react";
import Test from "./Test";
import { Suspense } from "react";

const Home = () => {
  const { push } = useRouter();

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Home
      <button
        onClick={() =>
          push({
            url: "/test",
          })
        }
      >
        test로
      </button>
      <Button>차크라 ui 버튼</Button>
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </div>
  );
};

export default Home;
