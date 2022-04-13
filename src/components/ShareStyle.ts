import styled from "styled-components";

export const ShareContainer = styled.div`
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  width: 100%;
  height: 170px;
`;

export const ShareWrapper = styled.div`
  padding: 10px;
`;

export const ShareTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ShareBottom = styled.form``;

export const ShareProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ShareInput = styled.input`
  border: none;
  width: 80%;
  outline: none;
`;

export const ShareHr = styled.hr`
  margin: 20px;
`;

export const ShareOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ShareOption = styled.label`
  display: flex;
  align-items: center;
`;

export const ShareOptionText = styled.span`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const ShareButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  font-weight: 500;
  transition: 500ms;
  background-color: #d8829d;
  cursor: pointer;
  &:hover {
    background-color: #d8829d;
    color: white;
  }
`;

export const UploadFile = styled.input`
  display: none;
`;
