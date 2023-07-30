import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import MeetingInvite from "./Component/invite";
import MeetingNaming from "./Component/naming";
import { useRoomCreate } from "../queries/useRoomCreate";
import { useRouter } from "../../../hooks/useRouter";

const MeetingCreate = () => {
  const { push } = useRouter();
  const [onNaming, setOnNaming] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");

  // const { mutate } = useRoomCreate({
  //   // TODO: loading, error exec
  //   onSuccess: data => {
  //     push({
  //       url: `/meeting/${data}`,
  //     });
  //   },
  // });

  const createRoom = async () => {
    // mutate({ name: selectedName, user_ids: selectedIds });
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
