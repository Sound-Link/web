import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import MeetingInvite from "./Component/invite";
import MeetingNaming from "./Component/naming";

const MeetingCreate = () => {
  const [onNaming, setOnNaming] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");

  const createRoom = () => {
    // TODO: Room 생성되는 동안 로딩 처리
    // TODO: Create Room API
    console.log(selectedIds, selectedName);
  };

  return (
    <Stack gap="2rem" height="100%" padding="7rem 3.5rem 3.5rem 3.5rem">
      <Text
        textAlign="center"
        fontFamily="JamsilExtraInfo"
        fontWeight="extrabold"
        fontSize="1.5rem"
        color="white"
      >
        회의를 시작하겠습니다
      </Text>
      {!onNaming && (
        <MeetingInvite
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          setOnNaming={setOnNaming}
        />
      )}
      {onNaming && (
        <MeetingNaming
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          createRoom={createRoom}
        />
      )}
    </Stack>
  );
};

export default MeetingCreate;
