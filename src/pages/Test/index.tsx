import { useRouter } from "../../hooks/useRouter";

const Test = () => {
  const { back } = useRouter();

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Test
      <button onClick={() => back()}>home으로</button>
    </div>
  );
};

export default Test;
