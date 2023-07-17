import { useRouter } from "../../hooks/useRouter";
import { isApp } from "../../utils/isApp";

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
    </div>
  );
};

export default Home;
