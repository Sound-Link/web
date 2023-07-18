import { Button } from "@chakra-ui/react";
import { Suspense } from "react";
import { useRouter } from "../../hooks/useRouter";
import Test from "./Test";

const Home = () => {
  const { push } = useRouter();
  //   const test = useLocation();

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
