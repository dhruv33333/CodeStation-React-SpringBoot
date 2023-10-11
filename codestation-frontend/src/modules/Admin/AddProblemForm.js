import React, { useState } from "react";
import axios from "axios";

// context
import { useAppContext } from "../../contexts/AppProvider";

// components
import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import CodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";

// styles
import { InputWrapper, GridWrapper, Divider, CodeWrapper } from "./styled";

const AddProblemForm = () => {
  const toast = useToast();
  const { user } = useAppContext();
  const [driverCode, setDriverCode] = useState({ java: "", cpp: "" });
  const [formObj, setFormObj] = useState({});

  const handleChange = (e, key) => {
    const info = { ...formObj };
    info[key] = e.target.value;
    setFormObj(info);
  };

  const handleSubmit = async () => {
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

    const reqObj = {
      ...formObj,
      driverCode: { java: btoa(driverCode?.java), cpp: btoa(driverCode?.cpp) },
    };

    const res = await axios({
      method: "post",
      url: `/problem/add-problem?userId=${user?.id}`,
      data: reqObj,
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });

    if (res?.data?.status === "ok") {
      toast({
        title: "Problem added successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
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
            <p>Enter example input</p>
            <Input
              type="text"
              placeholder="Example input"
              onChange={(e) => handleChange(e, "exampleIn")}
            />
          </InputWrapper>
          <InputWrapper>
            <p>Enter example output</p>
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
