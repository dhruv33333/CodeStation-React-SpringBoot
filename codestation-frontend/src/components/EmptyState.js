import React from "react";

// assets
import NoResults from "../assets/no-results.jpg";

// components
import { Box, Heading, Image } from "@chakra-ui/react";

const EmptyState = ({ title }) => {
  return (
    <Box
      border="1px solid #e5e5e5"
      p={20}
      w="40vw"
      m="auto"
      mt={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image src={NoResults} h="200px" w="200px" />
      <Heading as="h4" size="lg">
        {title || "No results found."}
      </Heading>
    </Box>
  );
};

export default EmptyState;
