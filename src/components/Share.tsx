import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { useContext } from "react";

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
import { AuthContext } from "../context/AuthContext";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareTop>
          <ShareProfileImage
            src={
              user.profilePicture
                ? PublicFolder + user.profilePicture
                : PublicFolder + "person/noAvatar.png"
            }
          ></ShareProfileImage>
          <ShareInput placeholder="Anything interesting to share?"></ShareInput>
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
