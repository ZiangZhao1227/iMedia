import {
  SidebarFriendImage,
  SidebarFriendName,
  SidebarFriend,
} from "./CloseFriendStyle";
import { UserProps } from "./OnlineFriend";

const CloseFriend = ({ user }: UserProps) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <SidebarFriend>
      <SidebarFriendImage src={PublicFolder + user.profilePicture}></SidebarFriendImage>
      <SidebarFriendName>{user.username}</SidebarFriendName>
    </SidebarFriend>
  );
};

export default CloseFriend;
