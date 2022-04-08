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
          <LoginBox>
            <LoginInput placeholder="Email"></LoginInput>
            <LoginInput placeholder="Password"></LoginInput>
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
