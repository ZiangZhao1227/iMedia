import axios from "axios";
import { useEffect, useState, useContext } from "react";

import { FeedWrapper, FeedContainer } from "./FeedStyle";
import Post from "./Post";
import Share from "./Share";
import { BASE_URL } from "../api/baseUrl";
import { AuthContext } from "../context/AuthContext";

const Feed = ({ username }: any) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${BASE_URL}posts/profile/${username}`)
        : await axios.get(`${BASE_URL}posts/timeline/${user._id}`);
      setPosts(
        res.data.sort((p1:{ createdAt: string | number | Date; }, p2: { createdAt: string | number | Date; }) => {
          return new Date(p2.createdAt).valueOf() - new Date(p1.createdAt).valueOf();
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <FeedContainer>
      <FeedWrapper>
        <Share />
        {posts.map((postItem: any) => (
          <Post key={postItem._id} post={postItem} />
        ))}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
