import { MoreVert } from "@material-ui/icons";

import {
  PostBottom,
  PostCenter,
  PostContainer,
  PostTop,
  PostWrapper,
  PostTopLeft,
  PostProfileImage,
  PostUsername,
  PostDate,
  PostTopRight,
  PostText,
  PostImge,
  PostBottomRight,
  PostBottomLeft,
  LikeIcon,
  PostLikeCounter,
  PostCommentText,
} from "./PostStyle";

const Post = () => {
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImage src="./assets/person/10.jpeg"></PostProfileImage>
            <PostUsername>Test User 1</PostUsername>
            <PostDate>5 mins ago</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <MoreVert />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>Hey! Its my first post</PostText>
          <PostImge src="./assets/post/1.jpeg"></PostImge>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon src="./assets/like.png"></LikeIcon>
            <LikeIcon src="./assets/heart.png"></LikeIcon>
            <PostLikeCounter>32 people liked it</PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostCommentText>9 comments</PostCommentText>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;
