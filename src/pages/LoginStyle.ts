import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

export const LoginLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginLogo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #1775ee;
  margin-bottom: 10px;
  font-family: "Shizuru", cursive;
`;

export const LoginDesc = styled.span`
  font-size: 24px;
`;

export const LoginBox = styled.form`
  height: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

export const LoginInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 10px;
  padding-left: 20px;
  outline: none;
`;

export const LoginButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const LoginRegisterButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #42b72a;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const LoginForgot = styled.span`
  text-align: center;
  color: #1775ee;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
