import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import Div100vh from "react-div-100vh";
import { useEffect } from "react";
import { queryClient } from "./queryClient";
import RouteGroup from "./routes";
import theme from "./assets/theme";
import { getToken, vaildateToken } from "./api/auth";

const App = () => {
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("8d14be00636c3c6f065f37e3ea715cb4");
    }
    if (code && window.Kakao.isInitialized() && !accessToken) {
      getToken();
    }
    if (accessToken) {
      vaildateToken();
    }
  }, []);

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
