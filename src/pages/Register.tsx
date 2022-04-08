import {
  RegisterContainer,
  RegisterDesc,
  RegisterLeft,
  RegisterLogo,
  RegisterRight,
  RegisterWrapper,
  RegisterBox,
  RegisterInput,
  RegisterButton,
} from "./RegisterStyle";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterLeft>
          <RegisterLogo>iMedia</RegisterLogo>
          <RegisterDesc>
            Connect with friends and the world around you on iMedia.
          </RegisterDesc>
        </RegisterLeft>
        <RegisterRight>
          <RegisterBox>
            <RegisterInput placeholder="Username"></RegisterInput>
            <RegisterInput placeholder="Email"></RegisterInput>
            <RegisterInput placeholder="Password"></RegisterInput>
            <RegisterInput placeholder="Confirm Password"></RegisterInput>
            <RegisterButton>Sign up</RegisterButton>{" "}
          </RegisterBox>
        </RegisterRight>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
