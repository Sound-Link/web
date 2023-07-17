import { Input } from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";

const Test = () => {
  const { back } = useRouter();

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Test
      <button onClick={() => back()}>home으로</button>
      <Input placeholder="sound lint" />
    </div>
  );
};

export default Test;
