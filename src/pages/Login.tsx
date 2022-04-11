import { useRef } from "react";

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

const Login = () => {
  const email = useRef<any>();
  const password = useRef<any>();
  const handleClick = (e: any) => {
    e.preventDefault();
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
            <LoginButton>Log in</LoginButton>
            <LoginForgot>Forgot Password?</LoginForgot>
            <LoginRegisterButton>Create a New Account</LoginRegisterButton>
          </LoginBox>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
