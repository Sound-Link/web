import { Box, Input, InputProps, Image } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";
import Images from "../../assets/images/Icon";

interface InputWithClearProps extends InputProps {
  onClear: () => void;
}

export const InputWithClear = forwardRef(
  (
    { onClear, ...rest }: InputWithClearProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box width="100%" position="relative">
        <Input
          px="1.35rem"
          py="0.9rem"
          bgColor="bgColor.gray2"
          outline="none"
          height="fit-content"
          width="fit-content"
          zIndex={1}
          ref={ref}
          {...rest}
        />
        <Box
          position="absolute"
          right="1.45rem"
          top="50%"
          zIndex={1}
          transform="translateY(-50%)"
          as="button"
          aria-label="입력 삭제 버튼"
          onClick={onClear}
        >
          <Image alt="" width="1.9rem" src={Images.inputClearButton} />
        </Box>
      </Box>
    );
  },
);
