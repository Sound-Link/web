import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import FriendsEnroll from "./Component/enroll";
import FriendsCheck from "./Component/check";

const Friends = () => {
  const [nickName, setNickName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  return (
    <Flex width="100%" height="100%">
      {!status ? (
        <FriendsEnroll
          nickName={nickName}
          phoneNumber={phoneNumber}
          setNickName={setNickName}
          setPhoneNumber={setPhoneNumber}
          setStatus={setStatus}
        />
      ) : (
        <FriendsCheck nickName={nickName} />
      )}
    </Flex>
  );
};

export default Friends;
