import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRoomCreate } from "../queries/useRoomCreate";
import { useRouter } from "../../../hooks/useRouter";
import { InputWithClear } from "../../../components/common/InputWithClear";
import { NoButton } from "../../../components/common/NoButton";
import { OkButton } from "../../../components/common/OkButton";

const MeetingCreate = () => {
  const { back } = useRouter();
  const [name, setName] = useState<string>("");

  const { mutate } = useRoomCreate();

  const createRoom = async () => {
    if (name === "") {
      alert("이름을 입력해주세요");

      return;
    }
    mutate(name);
  };

  return (
    <Stack gap="2rem" height="100%" padding="7rem 3.5rem 3.5rem 3.5rem">
      <Text
        textAlign="center"
        fontFamily="JamsilExtraInfo"
        fontWeight="extrabold"
        fontSize="2.5rem"
        color="white"
      >
        회의 생성
      </Text>
      <Stack width="100%">
        <InputWithClear
          value={name}
          onChange={e => setName(e.target.value)}
          css={{ width: "100%" }}
          onClear={() => {
            setName("");
          }}
          placeholder="회의 이름을 입력해주세요"
        />
      </Stack>
      <Stack direction="row" justify="end">
        <NoButton onClick={() => back()} />
        <OkButton onClick={createRoom} />
      </Stack>
    </Stack>
  );
};

export default MeetingCreate;
