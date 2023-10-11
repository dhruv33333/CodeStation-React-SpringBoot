import React, { useState } from "react";

// components
import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";

// styles
import { InputWrapper, GridWrapper, Divider, CodeWrapper } from "./styled";

const AddProblemForm = () => {
  const toast = useToast();
  const [driverCode, setDriverCode] = useState({ java: "", cpp: "" });
  const [formObj, setFormObj] = useState({});

  const handleChange = (e, key) => {
    const info = { ...formObj };
    info[key] = e.target.value;
    setFormObj(info);
  };
  console.log({ formObj, driverCode });

  const handleSubmit = () => {
    const {
      title,
      description,
      difficulty,
      acceptance,
      exampleIn,
      exampleOut,
      totalTestcases,
    } = formObj || {};

    if (
      !title ||
      !description ||
      !difficulty ||
      !acceptance ||
      !exampleIn ||
      !exampleOut ||
      !totalTestcases ||
      !driverCode.java ||
      !driverCode.cpp
    ) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
  };

  return (
    <>
      <Heading fontSize={22} mb={4}>
        Add a Problem
      </Heading>
      <Box
        bgColor="#F8F8F8"
        boxShadow="0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05)"
        padding="20px 60px"
        border="1px solid #e5e5e5"
        borderRadius={8}
      >
        <InputWrapper>
          <p>Enter problem title</p>
          <Input
            type="text"
            placeholder="Problem title"
            onChange={(e) => handleChange(e, "title")}
          />
        </InputWrapper>

        <InputWrapper>
          <p>Enter problem description</p>
          <Input
            type="text"
            placeholder="Problem description"
            onChange={(e) => handleChange(e, "description")}
            mb={4}
          />
        </InputWrapper>

        <Divider />

        <GridWrapper>
          <InputWrapper>
            <p>Enter problem difficulty</p>
            <Input
              type="text"
              placeholder="Difficulty"
              onChange={(e) => handleChange(e, "difficulty")}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Enter problem acceptance</p>
            <Input
              type="text"
              placeholder="Acceptance"
              onChange={(e) => handleChange(e, "acceptance")}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Enter example Input</p>
            <Input
              type="text"
              placeholder="Example input"
              onChange={(e) => handleChange(e, "exampleIn")}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Enter example Output</p>
            <Input
              type="text"
              placeholder="Example output"
              onChange={(e) => handleChange(e, "exampleOut")}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Enter total testcases</p>
            <Input
              type="number"
              placeholder="Total testcases"
              onChange={(e) => handleChange(e, "totalTestcases")}
            />
          </InputWrapper>
        </GridWrapper>

        <Divider />

        <CodeWrapper>
          <p>Java driver code</p>
          <CodeMirror
            value={driverCode.java}
            height="50vh"
            theme="dark"
            extensions={[java()]}
            onChange={(value) => setDriverCode({ ...driverCode, java: value })}
          />
        </CodeWrapper>

        <CodeWrapper>
          <p>C++ driver code</p>
          <CodeMirror
            value={driverCode.cpp}
            height="50vh"
            theme="dark"
            extensions={[cpp()]}
            onChange={(value) => setDriverCode({ ...driverCode, cpp: value })}
          />
        </CodeWrapper>

        <Button
          margin="16px 0"
          colorScheme="blue"
          width="220px"
          onClick={handleSubmit}
        >
          Add problem
        </Button>
      </Box>
    </>
  );
};

export default AddProblemForm;
