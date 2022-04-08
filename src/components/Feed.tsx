import axios from "axios";
import { useEffect, useState } from "react";

import { FeedWrapper, FeedContainer } from "./FeedStyle";
import Post from "./Post";
import Share from "./Share";
import { BASE_URL } from "../api/baseUrl";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${BASE_URL}posts/timeline/624c748ea9fc5c5d8cd344d4`
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

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
