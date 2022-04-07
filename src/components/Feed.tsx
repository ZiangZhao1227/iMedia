import { FeedWrapper, FeedContainer } from "./FeedStyle";
import Post from "./Post";
import Share from "./Share";

const Feed = () => {
  return (
    <FeedContainer>
      <FeedWrapper>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
