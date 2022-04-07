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

interface PostProps {
  post: {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
  };
}

const Post = ({ post }: PostProps) => {
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImage src="./assets/person/10.jpeg"></PostProfileImage>
            <PostUsername>Test User 1</PostUsername>
            <PostDate>{post.date}</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <MoreVert />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>{post.desc}</PostText>
          <PostImge src={post.photo}></PostImge>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon src="./assets/like.png"></LikeIcon>
            <LikeIcon src="./assets/heart.png"></LikeIcon>
            <PostLikeCounter>{post.like}</PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostCommentText>{post.comment}</PostCommentText>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;
