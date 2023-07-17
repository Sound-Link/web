import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { queryClient } from "./queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
