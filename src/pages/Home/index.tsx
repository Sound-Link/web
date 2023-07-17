import { useRouter } from "../../hooks/useRouter";
import { Button } from "@chakra-ui/react";

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
    </div>
  );
};

export default Home;
