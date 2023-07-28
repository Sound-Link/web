import { Box, Image, ButtonProps } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";

export const NoButton = (props: ButtonProps) => {
  return (
    <Box
      width="6.4rem"
      height="3.2rem"
      as="button"
      aria-label="취소 버튼"
      {...props}
    >
      <Image alt="" src={Images.noIcon} />
    </Box>
  );
};
