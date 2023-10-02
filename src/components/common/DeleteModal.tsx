import {
  Modal as CommonModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { OkButton } from "./OkButton";
import { NoButton } from "./NoButton";
import { useDeleteRoom } from "../../pages/Meeting/queries/useDeleteRoom";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeleteModal = ({ isOpen, onClose }: DeleteModalProps) => {
  const { mutate } = useDeleteRoom(onClose);

  return (
    <CommonModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>회의 삭제</ModalHeader>
        <ModalBody>
          <Flex direction="column" width="100%" gap="1.6rem">
            정말로 삭제하시겠습니까?
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap="0.4rem">
            <NoButton onClick={() => onClose()} />
            <OkButton onClick={() => mutate()} />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </CommonModal>
  );
};
