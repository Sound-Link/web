import {
  Modal as CommonModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { OkButton } from "./OkButton";
import { NoButton } from "./NoButton";
import { InputWithClear } from "./InputWithClear";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("recordInterval") || "5000",
  );

  return (
    <CommonModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>녹음 주기 설정</ModalHeader>
        <ModalBody>
          <Flex direction="column" width="100%" gap="1.6rem">
            <InputWithClear
              css={{ width: "100%" }}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onClear={() => setInputValue("0")}
              type="tel"
            />
            녹음 주기가 너무 짧으면 유실되는 음성이 발생할 수 있습니다.
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap="0.4rem">
            <NoButton onClick={() => onClose()} />
            <OkButton
              onClick={() => {
                localStorage.setItem("recordInterval", inputValue);
                onClose();
              }}
            />
          </Flex>
        </ModalFooter>
      </ModalContent>
    </CommonModal>
  );
};
