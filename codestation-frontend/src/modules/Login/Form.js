import React from "react";

// assets
import { FaUser } from "react-icons/fa";
import { GrImage } from "react-icons/gr";
import { MdEmail, MdLock, MdOutlineLock } from "react-icons/md";

// components
import {
  Button,
  useToast,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

// styles
import { InputWrap } from "./styled";

const Form = ({
  selectedTab,
  loginInfo,
  setLoginInfo,
  registerInfo,
  setRegisterInfo,
  handleLogin,
  handleRegister,
  isLoading,
  setLoading,
  setPic,
}) => {
  const toast = useToast();

  const handleLoginInfoChange = (e, key) => {
    const info = { ...loginInfo };
    info[key] = e.target.value;
    setLoginInfo(info);
  };

  const handleRegisterInfoChange = (e, key) => {
    const info = { ...registerInfo };
    info[key] = e.target.value;
    setRegisterInfo(info);
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "code-station");
      data.append("cloud_name", "dhruvn");
      fetch("https://api.cloudinary.com/v1_1/dhruvn/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          toast({
            title: "Error while uploading image!",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
          });
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image !",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
      return;
    }
  };

  let form;

  if (selectedTab === "login") {
    form = (
      <InputWrap>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdEmail />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Your email"
            onChange={(e) => handleLoginInfoChange(e, "email")}
            value={loginInfo.email}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdLock />
          </InputLeftElement>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => handleLoginInfoChange(e, "password")}
            value={loginInfo.password}
          />
        </InputGroup>
      </InputWrap>
    );
  } else {
    form = (
      <InputWrap>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaUser />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Your Name"
            onChange={(e) => handleRegisterInfoChange(e, "name")}
            value={registerInfo.name}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdEmail />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Your Email"
            onChange={(e) => handleRegisterInfoChange(e, "email")}
            value={registerInfo.email}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <GrImage />
          </InputLeftElement>
          <Input
            type="file"
            accept="image/*"
            placeholder="Upload pic"
            onChange={(e) => postDetails(e.target.files[0])}
            pt={1}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdLock />
          </InputLeftElement>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => handleRegisterInfoChange(e, "password")}
            value={registerInfo.password}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <MdOutlineLock />
          </InputLeftElement>
          <Input
            type="password"
            placeholder="Repeat your password"
            onChange={(e) => handleRegisterInfoChange(e, "cpassword")}
            value={registerInfo.cpassword}
          />
        </InputGroup>
      </InputWrap>
    );
  }

  return (
    <div>
      {form}
      <Button
        colorScheme="blue"
        isLoading={isLoading}
        onClick={selectedTab === "login" ? handleLogin : handleRegister}
        mt={4}
        size="md"
        p="20px 40px"
      >
        {selectedTab === "login" ? "Log in" : "Register"}
      </Button>
    </div>
  );
};

export default Form;
