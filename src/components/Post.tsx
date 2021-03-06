import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

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
import { BASE_URL } from "../api/baseUrl";
import { AuthContext } from "../context/AuthContext";
import { PublicFolder } from "../api/baseUrl";

interface PostProps {
  post: {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    likes: string[];
    comment: number;
    img: string;
    createdAt: Date;
    _id: string;
  };
}

const Post = ({ post }: PostProps) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<any>({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${BASE_URL}users?userId=${post.userId}`);
      setUser(res.data.userInfo);
    };
    fetchUser();
  }, [post.userId]);

  const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${currentUser.accessToken}`,
    },
  });

  const likeHandler = () => {
    try {
      userRequest.put(`posts/${post._id}/like`);
    } catch (error) {}

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <Link to={`/profile/${user.username}`}>
              <PostProfileImage
                src={
                  user.profilePicture
                    ? PublicFolder + user.profilePicture
                    : PublicFolder + "person/noAvatar.png"
                }
              ></PostProfileImage>
            </Link>
            <PostUsername>{user.username}</PostUsername>
            <PostDate>{format(post.createdAt)}</PostDate>
          </PostTopLeft>
          <PostTopRight>
            <MoreVert />
          </PostTopRight>
        </PostTop>
        <PostCenter>
          <PostText>{post.desc}</PostText>
          <PostImge src={PublicFolder + post.img}></PostImge>
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
