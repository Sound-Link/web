import { Box, ButtonProps, Image } from "@chakra-ui/react";
import Images from "../../assets/images/Icon";

export const OkButton = (props: ButtonProps) => {
  return (
    <Box
      width="6.4rem"
      height="3.2rem"
      as="button"
      aria-label="확인 버튼"
      {...props}
    >
      <Image alt="" src={Images.okIcon} />
    </Box>
  );
};
