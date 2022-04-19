import {
  RightbarFriend,
  RightbarProfileImageContainer,
  RightbarProfileImage,
  RightbarOnline,
  RightbarUsername,
} from "./OnlineFriendStyle";
import { PublicFolder } from "../api/baseUrl";

export interface UserProps {
  user: {
    id: number;
    profilePicture: string;
    username: string;
  };
}

const OnlineFriend = ({ user }: UserProps) => {
  return (
    <RightbarFriend>
      <RightbarProfileImageContainer>
        <RightbarProfileImage
          src={PublicFolder + user.profilePicture}
        ></RightbarProfileImage>
        <RightbarOnline></RightbarOnline>
      </RightbarProfileImageContainer>
      <RightbarUsername>{user.username}</RightbarUsername>
    </RightbarFriend>
  );
};

export default OnlineFriend;
