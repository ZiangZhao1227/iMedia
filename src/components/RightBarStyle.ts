import styled from "styled-components";

export const RightbarContainer = styled.div`
  flex: 3.5;
`;

export const RightbarWrapper = styled.div`
  padding: 20px 20px 0 0;
`;

export const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BirthdayImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const BirthdayText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

export const RightbarAd = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`;

export const RightbarTitle = styled.h4`
  margin-bottom: 20px;
`;

export const RightbarFriendList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

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
