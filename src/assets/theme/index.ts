import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
  colors,
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "bgColor.gray",
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        "font-size": "62.5%",
        background: "bgColor.gray",
      },
      "*": {
        "box-sizing": "border-box",
      },
    },
  },
});

export default theme;
