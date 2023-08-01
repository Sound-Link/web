import { Flex, Box } from "@chakra-ui/react";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

interface InputGroupProps {
  verifyValue: string;
  setVerifyValue: Dispatch<SetStateAction<string>>;
}

export const InputGroup = ({
  verifyValue,
  setVerifyValue,
}: InputGroupProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 6 || Number.isNaN(Number(value))) return;
    setVerifyValue(value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Flex
      gap="0.4rem"
      onClick={() => {
        inputRef.current?.focus();
      }}
      role="textbox"
    >
      <input
        style={{ width: "0", height: "0" }}
        ref={inputRef}
        value={verifyValue}
        onChange={handleChange}
        type="tel"
      />
      {[0, 1, 2, 3, 4, 5].map(arr => {
        return (
          <Box
            height="5rem"
            borderRadius="1.6rem"
            width="5rem"
            bgColor="bgColor.gray2"
            padding="1rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="4rem"
            key={arr}
          >
            {verifyValue[arr]}
          </Box>
        );
      })}
    </Flex>
  );
};
