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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>녹음 주기 설정</ModalHeader>
        <ModalBody>b</ModalBody>
        <ModalFooter>
          <Flex gap="0.4rem">
            <NoButton />
            <OkButton />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </CommonModal>
  );
};
