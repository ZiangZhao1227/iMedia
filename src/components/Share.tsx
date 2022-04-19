import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import axios from "axios";

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
  UploadFile,
  ShareImageContainer,
  ShareImage,
} from "./ShareStyle";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../api/baseUrl";
import { PublicFolder } from "../api/baseUrl";

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef<any>();
  const [file, setFile] = useState<any>(null);
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    } as any;
    if (file as any) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file as any);
      newPost.img = fileName;
      try {
        await axios.post(`${BASE_URL}upload`, data);
      } catch (err) {}
    }
    try {
      await axios.post(`${BASE_URL}posts`, newPost);
      window.location.reload();
    } catch (err) {}
  };
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
          <ShareInput
            ref={desc}
            placeholder={"Anything interesting to share " + user.username + "?"}
          ></ShareInput>
        </ShareTop>
        <ShareHr />
        {file && (
          <ShareImageContainer>
            <ShareImage src={URL.createObjectURL(file)}></ShareImage>
            <Cancel
              onClick={() => setFile(null)}
              style={{
                position: "absolute",
                top: "0",
                right: "20px",
                cursor: "pointer",
                opacity: "0.7",
              }}
            />
          </ShareImageContainer>
        )}
        <ShareBottom onSubmit={submitHandler}>
          <ShareOptions>
            <ShareOption htmlFor="file">
              <PermMedia
                htmlColor="tomato"
                style={{ fontSize: "20px", marginRight: "5px" }}
              />
              <ShareOptionText>Photo or Video</ShareOptionText>
              <UploadFile
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e: any) => setFile(e.target.files[0])}
              ></UploadFile>
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
            <ShareButton type="submit">Share</ShareButton>
          </ShareOptions>
        </ShareBottom>
      </ShareWrapper>
    </ShareContainer>
  );
};

export default Share;
