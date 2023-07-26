import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
  colors,
  styles: {
    global: {
      html: {
        "font-size": "62.5%",
      },
      "*": {
        "box-sizing": "content-box",
      },
    },
  },
});

export default theme;
