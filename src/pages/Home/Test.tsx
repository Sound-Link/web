import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const testApi = async (): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          test: "test",
        },
      });
    }, 2000);
  });

const Test = () => {
  const { data } = useQuery(["test"], testApi);

  return <Box>{data.data.test}</Box>;
};

export default Test;
