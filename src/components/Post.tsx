import { MoreVert, Public } from "@material-ui/icons";

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
import { Users } from "../data";
import { useState } from "react";

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
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImage
              src={
                Users.filter((userItem) => userItem.id === post.userId)[0]
                  .profilePicture
              }
            ></PostProfileImage>
            <PostUsername>
              {
                Users.filter((userItem) => userItem.id === post.userId)[0]
                  .username
              }
            </PostUsername>
            <PostDate>{post.date}</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <MoreVert />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>{post.desc}</PostText>
          <PostImge src={PublicFolder + post.photo}></PostImge>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon
              src={`${PublicFolder}like.png`}
              onClick={likeHandler}
            ></LikeIcon>
            <LikeIcon
              src={`${PublicFolder}heart.png`}
              onClick={likeHandler}
            ></LikeIcon>
            <PostLikeCounter>{like} people like it</PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
            <PostCommentText>{post.comment} comments</PostCommentText>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;
