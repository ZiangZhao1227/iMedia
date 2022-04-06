import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

import {
  ShareContainer,
  ShareWrapper,
  ShareTop,
  ShareBottom,
  ShareHr,
  ShareInput,
  ShareOption,
  ShareProfileImage,
  ShareOptions,
  ShareOptionText,
  ShareButton,
} from "./ShareStyle";

const Share = () => {
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareTop>
          <ShareProfileImage src="./assets/person/1.jpeg"></ShareProfileImage>
          <ShareInput placeholder="What's in your mind Safak?"></ShareInput>
        </ShareTop>
        <ShareHr />
        <ShareBottom>
          <ShareOptions>
            <ShareOption>
              <PermMedia
                htmlColor="tomato"
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              <ShareOptionText>Photo or Video</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <Label
                htmlColor="blue"
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              <ShareOptionText>Tag</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <Room
                htmlColor="green"
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              <ShareOptionText>Location</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <EmojiEmotions
                htmlColor="goldenrod"
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              <ShareOptionText>Feelings</ShareOptionText>
            </ShareOption>
            <ShareButton>Share</ShareButton>
          </ShareOptions>
        </ShareBottom>
      </ShareWrapper>
    </ShareContainer>
  );
};

export default Share;
