import { FeedWrapper, FeedContainer } from "./FeedStyle";
import Post from "./Post";
import Share from "./Share";
import { Posts } from "../data";

const Feed = () => {
  return (
    <FeedContainer>
      <FeedWrapper>
        <Share />
        {Posts.map((postItem) => (
          <Post key={postItem.id} post={postItem} />
        ))}
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;
