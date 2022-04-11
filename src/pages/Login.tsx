import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import {
  LoginContainer,
  LoginDesc,
  LoginLeft,
  LoginLogo,
  LoginRight,
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginButton,
  LoginForgot,
  LoginRegisterButton,
} from "./LoginStyle";
import { loginCall } from "../api/apiCall";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef<any>();
  const password = useRef<any>();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e: any) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginLeft>
          <LoginLogo>iMedia</LoginLogo>
          <LoginDesc>
            Connect with friends and the world around you on iMedia.
          </LoginDesc>
        </LoginLeft>
        <LoginRight>
          <LoginBox onSubmit={handleClick}>
            <LoginInput
              placeholder="Email"
              required
              type="email"
              ref={email}
            ></LoginInput>
            <LoginInput
              placeholder="Password"
              required
              minLength={6}
              type="password"
              ref={password}
            ></LoginInput>
            <LoginButton disabled={isFetching} type="submit">
              {isFetching ? (
                <CircularProgress size="20px" style={{ color: "white" }} />
              ) : (
                "Log In"
              )}
            </LoginButton>
            <LoginForgot>Forgot Password?</LoginForgot>
            <LoginRegisterButton onClick={handleNavigate}>
              Create a New Account
            </LoginRegisterButton>
          </LoginBox>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
