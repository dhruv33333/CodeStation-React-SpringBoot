import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// assets
import LoginImg from "../../assets/login.jpg";
import RegisterImg from "../../assets/register.jpg";

// context
// import { useAppContext } from "../../contexts/AppProvider";

// components
import Form from "./Form";
import { useToast } from "@chakra-ui/react";

// styles
import {
  LeftSection,
  RightSection,
  Wrapper,
  Tabs,
  InnerWrap,
  Tab,
  Header,
} from "./styled";

const Login = () => {
  const toast = useToast();
  const history = useHistory();
  //   const { setUser } = useAppContext();
  const [selectedTab, setSelectedTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  //TODO- Add profile upload logic
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [pic, setPic] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("User already logged in, redirecting to home page");
      history.push("/home");
    }
  }, []);

  const handleLogin = async () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      toast({
        title: "Please enter all the details!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true);
      const apiResponse = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      setLoading(false);

      const res = await apiResponse.json();
      if (res.status === "ok") {
        toast({
          title: res.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });

        // storing our user (with auth token) in local storage
        const stringData = JSON.stringify(res.data);
        localStorage.setItem("user", stringData);

        // setUser(res.data); // TODO - debug why removing this sometimes doesnt run the hook
        history.push("/home");
      } else {
        toast({
          title: res.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        return;
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    const { name, email, password, cpassword } = registerInfo;

    if (!name || !email || !password || !cpassword) {
      toast({
        title: "Please enter all the details!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    if (password !== cpassword) {
      toast({
        title: "Both password don't match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    try {
      setLoading(true);
      const apiResponse = await fetch("/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
          pic,
        }),
      });

      const res = await apiResponse.json();
      if (res.status === "ok") {
        toast({
          title: res.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        setSelectedTab("login");
      } else {
        toast({
          title: res.error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <>
      <Header>Code Station</Header>
      <Wrapper>
        <Tabs>
          <Tab
            selected={selectedTab === "login"}
            onClick={() => setSelectedTab("login")}
          >
            Login
          </Tab>
          <Tab
            selected={selectedTab === "register"}
            onClick={() => setSelectedTab("register")}
          >
            Sign Up
          </Tab>
        </Tabs>
        <InnerWrap>
          <LeftSection>
            <h1>{selectedTab === "login" ? "Login" : "Sign Up"}</h1>
            <Form
              selectedTab={selectedTab}
              loginInfo={loginInfo}
              setLoginInfo={setLoginInfo}
              registerInfo={registerInfo}
              setRegisterInfo={setRegisterInfo}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
              isLoading={loading}
              setLoading={setLoading}
              setPic={setPic}
            />
          </LeftSection>
          <RightSection>
            <img
              src={selectedTab === "login" ? LoginImg : RegisterImg}
              alt="login-register-img"
            />
            {selectedTab === "login" && (
              <button
                onClick={() =>
                  setLoginInfo({
                    email: "guest@guest.com",
                    password: "iamaguest",
                  })
                }
              >
                Get guest user credentials
              </button>
            )}
          </RightSection>
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default Login;
