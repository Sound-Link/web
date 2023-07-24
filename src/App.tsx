import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import Div100vh from "react-div-100vh";
import { queryClient } from "./queryClient";
import RouteGroup from "./routes";
import theme from "./assets/theme";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Div100vh>
          <RouteGroup />
        </Div100vh>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
