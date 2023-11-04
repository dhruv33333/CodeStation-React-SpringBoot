import { Heading, Text, Textarea } from "@chakra-ui/react";
import React from "react";

const Explore = () => {
  return (
    <>
      <Text fontWeight={500} fontSize={16} color="#afafaf">
        Welcome to
      </Text>
      <Heading color="rgba(0, 0, 0, 0.65)" as="h2" size="lg" mt={2}>
        CodeStation
      </Heading>

      <Text
        lineHeight={8}
        mt={16}
        fontSize={18}
        fontWeight={500}
        color="#696969"
      >
        CodeStation is an online platform for coding interview preparation. We
        provide coding and algorithmic problems intended for users to practice
        coding. This is a place to practice DSA and ACE all the company
        interviews. <br /> <br /> Explore new problems in the Problems section.
      </Text>
    </>
  );
};

export default Explore;
