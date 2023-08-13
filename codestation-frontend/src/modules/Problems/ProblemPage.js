import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// components
import {
  Badge,
  Box,
  Heading,
  Text,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const difficultyColorMap = {
  Easy: "green",
  Medium: "yellow",
  Hard: "red",
};

const ProblemPage = () => {
  const { id } = useParams();
  const { user } = useAppContext();
  const history = useHistory();
  const toast = useToast();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");

  const { title, difficulty, description, exampleIn, exampleOut } =
    problem || {};

  const fetchProgram = async () => {
    const res = await fetch(`/problem/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setProblem(resJson?.data);
    }
  };

  const handleSubmit = async () => {
    const reqBody = { userId: user?.id, problemId: id, submissionCode: code };
    const res = await fetch("/submission/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const resJson = await res.json();

    if (resJson?.status === "ok") {
      if (resJson?.accepted) {
        toast({
          title: "Solution Accepted",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        history.push(`/submissions/${id}`);
      } else {
        toast({
          title: "Solution wasn't able to pass all test cases",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } else {
      toast({
        title: "Unable to submit at the moment",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    if (!problem) fetchProgram();
  }, [user]);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box maxW="40%">
        <Heading mb={2}>{title}</Heading>
        <Badge colorScheme={difficultyColorMap[difficulty]}>{difficulty}</Badge>

        <Text my={6}>{description}</Text>

        <Box bg="#d3d3d3" p={4} borderRadius={8}>
          <Text mb={2}>
            <strong>Input:</strong> {exampleIn}
          </Text>
          <Text>
            <strong>Output:</strong> {exampleOut}
          </Text>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" w="55%" gap="24px">
        <Heading>Code Here</Heading>
        <Textarea
          placeholder="Happy Coding!"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          w="100%"
          height="50vh"
          border="2px solid gray"
        />

        <Box>
          <Button
            bg="#1E2D40"
            color="white"
            width="100%"
            _hover={{ opacity: "0.9" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProblemPage;
