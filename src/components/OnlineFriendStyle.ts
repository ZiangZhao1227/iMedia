import styled from "styled-components";

export const RightbarFriend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const RightbarProfileImageContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;

export const RightbarProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const RightbarOnline = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  background-color: limegreen;
  top: -2px;
  right: 0;
  border: 2px solid white;
`;

export const RightbarUsername = styled.span`
  font-weight: 500;
`;
