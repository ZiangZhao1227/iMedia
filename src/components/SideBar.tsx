import {
  SidebarContainer,
  SidebarWrapper,
  SidebarListItem,
  SidebarList,
  SidebarListItemText,
  SidebarButton,
  SidebarHr,
  SidebarFriend,
  SidebarFriendList,
  SidebarFriendImage,
  SidebarFriendName,
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
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
          <SidebarFriend>
            <SidebarFriendImage src="./assets/person/2.jpeg"></SidebarFriendImage>
            <SidebarFriendName>John Doe</SidebarFriendName>
          </SidebarFriend>
        </SidebarFriendList>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
