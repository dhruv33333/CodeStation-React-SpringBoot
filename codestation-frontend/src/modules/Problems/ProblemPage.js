import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// context
import { useAppContext } from "../../contexts/AppProvider";

// consts
import { difficultyColorMap } from "./consts";

// components
import { PageLoader } from "../../components";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import {
  Badge,
  Box,
  Heading,
  Text,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";

const ProblemPage = () => {
  const { id } = useParams();
  const { user } = useAppContext();
  const history = useHistory();
  const toast = useToast();
  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [isFetching, setIsFetching] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const {
    title,
    difficulty,
    description,
    exampleIn,
    exampleOut,
    totalTestcases,
  } = problem || {};

  const fetchProgram = async () => {
    setIsFetching(true);
    const res = await fetch(`/problem/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setProblem(resJson?.data);

      // decoding the base-64 string
      setCode(atob(resJson?.data?.javaDriverCode));
    }
    setIsFetching(false);
  };

  const handleSubmit = async () => {
    setBtnLoading(true);
    const codeResult = await checkSubmission();
    const testcasesPassed = codeResult?.stdout?.split(" ")[0];

    const reqBody = {
      userId: user?.id,
      problemId: id,
      submissionCode: btoa(code),
      accepted: Number(testcasesPassed) === totalTestcases,
    };
    const res = await fetch("/submission/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const resJson = await res.json();
    setBtnLoading(false);

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

  const checkSubmission = async () => {
    const judge0BaseUrl = "https://judge0-ce.p.rapidapi.com/submissions";
    const headers = {
      "X-RapidAPI-Key": "21ed8680a6msh370ddf6e284eaa5p1346e0jsnb28f26e4ac7d", // To-Do make this api call from backend so token is hidden
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      "Content-Type": "application/json",
    };

    try {
      const res = await axios({
        method: "post",
        url: `${judge0BaseUrl}?base64_encoded=true&fields=*`,
        data: {
          language_id: selectedLanguage === "java" ? 91 : 54,
          source_code: btoa(code), // encoding code to base64
          stdin: btoa("codestation"),
        },
        headers: headers,
      });
      if (res?.data?.token) {
        let isProcessing = true;
        while (isProcessing) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const res2 = await axios({
            method: "get",
            url: `${judge0BaseUrl}/${res?.data?.token}?base64_encoded=false&fields=*`,
            headers: headers,
          });
          if (res2?.data?.status?.description !== "Processing") {
            isProcessing = false;
            return res2?.data;
          }
          console.log({ res2 });
        }
      }
    } catch (error) {
      toast({
        title: "There was an error while submitting the problem!",
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

  useEffect(() => {
    if (problem) {
      if (selectedLanguage === "java") setCode(atob(problem?.javaDriverCode));
      else setCode(atob(problem?.cppDriverCode));
    }
  }, [selectedLanguage]);

  const editorLanguage = selectedLanguage === "java" ? java : cpp;

  if (isFetching) {
    return <PageLoader />;
  }

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
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading>Code Here</Heading>
          <Select
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
            }}
            value={selectedLanguage}
            w="120px"
            justifyContent="space-between"
          >
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </Select>
        </Box>

        <CodeMirror
          value={code}
          height="50vh"
          theme="dark"
          extensions={[editorLanguage()]}
          onChange={(value) => setCode(value)}
        />

        <Box>
          <Button
            bg="#1E2D40"
            color="white"
            width="100%"
            _hover={{ opacity: "0.9" }}
            onClick={handleSubmit}
            isLoading={btnLoading}
          >
            Submit
          </Button>
          <Button
            width="100%"
            mt="8px"
            onClick={() => history.push(`/submissions/${id}`)}
          >
            View All Submissions
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProblemPage;
