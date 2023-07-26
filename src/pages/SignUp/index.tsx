import { useRouter } from "../../hooks/useRouter";

const SignUp = () => {
  const { query } = useRouter();

  return (
    <div style={{ position: "relative", top: "400px" }}>
      SignUp {query.a} <div>...</div>
      {query.b}
    </div>
  );
};

export default SignUp;
