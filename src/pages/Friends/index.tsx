import { useState, useCallback, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "../../hooks/useRouter";
import Images from "../../assets/images/Icon";
import FriendsEnroll from "./enroll";
import FriendsCheck from "./check";

const Friends = () => {
  const { push } = useRouter();
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
