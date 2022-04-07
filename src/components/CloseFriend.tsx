import { useScrollTrigger } from "@material-ui/core";
import {
  SidebarFriendImage,
  SidebarFriendName,
  SidebarFriend,
} from "./CloseFriendStyle";
import { UserProps } from "./OnlineFriend";
const CloseFriend = ({ user }: UserProps) => {
  return (
    <SidebarFriend>
      <SidebarFriendImage src={user.profilePicture}></SidebarFriendImage>
      <SidebarFriendName>{user.username}</SidebarFriendName>
    </SidebarFriend>
  );
};

export default CloseFriend;
