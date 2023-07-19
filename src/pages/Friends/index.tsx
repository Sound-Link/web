import { useRouter } from "../../hooks/useRouter";

const Friends = () => {
  const { push } = useRouter();
  //   const test = useLocation();

  return (
    <div style={{ position: "relative", top: "400px" }}>
      Friends
    </div>
  );
};

export default Friends;
