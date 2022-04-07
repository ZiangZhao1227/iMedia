import {
  SidebarContainer,
  SidebarWrapper,
  SidebarListItem,
  SidebarList,
  SidebarListItemText,
  SidebarButton,
  SidebarHr,
  SidebarFriendList,
} from "./SideBarStyle";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriend from "./CloseFriend";
import { Users } from "../data";

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarList>
          <SidebarListItem>
            <RssFeed style={{ marginRight: "15px" }} />
            <SidebarListItemText>Feed</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Chat style={{ marginRight: "15px" }} />
            <SidebarListItemText>Chats</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <PlayCircleFilledOutlined style={{ marginRight: "15px" }} />
            <SidebarListItemText>Vedios</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Group style={{ marginRight: "15px" }} />
            <SidebarListItemText>Groups</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Bookmark style={{ marginRight: "15px" }} />
            <SidebarListItemText>Bookmarks</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <HelpOutline style={{ marginRight: "15px" }} />
            <SidebarListItemText>Questions</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <WorkOutline style={{ marginRight: "15px" }} />
            <SidebarListItemText>Jobs</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <Event style={{ marginRight: "15px" }} />
            <SidebarListItemText>Events</SidebarListItemText>
          </SidebarListItem>
          <SidebarListItem>
            <School style={{ marginRight: "15px" }} />
            <SidebarListItemText>Courses</SidebarListItemText>
          </SidebarListItem>
        </SidebarList>
        <SidebarButton>Show More</SidebarButton>
        <SidebarHr />
        <SidebarFriendList>
          {Users.map((userItem) => (
            <CloseFriend key={userItem.id} user={userItem} />
          ))}
        </SidebarFriendList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
