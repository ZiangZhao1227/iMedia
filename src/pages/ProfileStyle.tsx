import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileRight = styled.div`
  flex: 9;
`;

export const ProfileRightTop = styled.div``;

export const ProfileRightBottom = styled.div`
  display: flex;
`;

export const ProfileCoverImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ProfileUserImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 150px;
  border: 3px solid white;
`;

export const ProfileCover = styled.div`
  height: 320px;
  position: relative;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfoDesc = styled.span`
  font-weight: 300;
  margin-bottom: 16px;
`;

export const ProfileInfoName = styled.h4`
  font-size: 26px;
  margin-bottom: 16px;
`;
