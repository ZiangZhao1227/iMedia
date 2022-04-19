import {
  SidebarFriendImage,
  SidebarFriendName,
  SidebarFriend,
} from "./CloseFriendStyle";
import { UserProps } from "./OnlineFriend";
import { PublicFolder } from "../api/baseUrl";

const CloseFriend = ({ user }: UserProps) => {
  return (
    <SidebarFriend>
      <SidebarFriendImage src={PublicFolder + user.profilePicture}></SidebarFriendImage>
      <SidebarFriendName>{user.username}</SidebarFriendName>
    </SidebarFriend>
  );
};

export default CloseFriend;
