import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
import { BASE_URL } from "../api/baseUrl";

const Register = () => {
  const navigate = useNavigate();
  const email = useRef<any>();
  const password = useRef<any>();
  const confirmPassword = useRef<any>();
  const username = useRef<any>();

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${BASE_URL}auth/register`, user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

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
          <RegisterBox onSubmit={handleClick}>
            <RegisterInput
              placeholder="Username"
              required
              ref={username}
            ></RegisterInput>
            <RegisterInput
              placeholder="Email"
              ref={email}
              required
              type="email"
            ></RegisterInput>
            <RegisterInput
              placeholder="Password"
              ref={password}
              required
              type="password"
              minLength={6}
            ></RegisterInput>
            <RegisterInput
              placeholder="Confirm Password"
              ref={confirmPassword}
              required
              type="password"
            ></RegisterInput>
            <RegisterButton type="submit">Sign up</RegisterButton>{" "}
          </RegisterBox>
        </RegisterRight>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

export default Register;
