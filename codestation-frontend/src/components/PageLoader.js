import React from "react";

// components
import { Skeleton, Stack } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <Stack w="100%" gap="12" mt="10">
      <Skeleton height="80px" />
      <Skeleton height="80px" />
      <Skeleton height="80px" />
      <Skeleton height="80px" />
      <Skeleton height="80px" />
      <Skeleton height="80px" />
      <Skeleton height="80px" />
    </Stack>
  );
};

export default PageLoader;
