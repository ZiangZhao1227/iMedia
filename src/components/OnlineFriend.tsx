import {
  RightbarFriend,
  RightbarProfileImageContainer,
  RightbarProfileImage,
  RightbarOnline,
  RightbarUsername,
} from "./OnlineFriendStyle";

export interface UserProps {
  user: {
    id: number;
    profilePicture: string;
    username: string;
  };
}

const OnlineFriend = ({ user }: UserProps) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
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
