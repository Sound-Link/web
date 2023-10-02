import { Skeleton as CommonSkeleton, Flex } from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <Flex direction="column" align="flex-end">
      <CommonSkeleton height="4.9rem" width="100%" />
      <CommonSkeleton width="5.4rem" height="1.5rem" />
    </Flex>
  );
};

export const DetailSkeleton = () => {
  return (
    <Flex direction="column" gap="3rem" width="100%" paddingBottom="4rem">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Flex>
  );
};
