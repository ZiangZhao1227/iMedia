import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;

export const PostWrapper = styled.div`
  padding: 10px;
`;

export const PostCenter = styled.div`
  margin: 20px 0;
`;

export const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const PostDate = styled.span`
  font-size: 12px;
`;

export const PostUsername = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
`;

export const PostTopRight = styled.div``;

export const PostText = styled.span``;

export const PostImge = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

export const PostBottomLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostBottomRight = styled.div``;

export const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

export const PostLikeCounter = styled.span`
  font-size: 15px;
`;

export const PostCommentText = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed gray;
  font-size: 15px;
`;
