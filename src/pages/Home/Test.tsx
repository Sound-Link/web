import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const testApi = async (): Promise<{
  data: {
    test: string;
  };
}> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          test: "test",
        },
      });
    }, 2000);
  });

const Test = () => {
  const test = useLocation();
  console.log(test);
  const { data } = useQuery(["test"], testApi);

  return <Box>{data?.data.test}</Box>;
};

export default Test;
