import {
  TopbarContainer,
  TopbarCenter,
  TopbarLeft,
  TopbarRight,
  Logo,
  SearchBar,
  SearchInput,
  TopbarLinks,
  TopbarLink,
  TopbarIcons,
  TopbarIconItem,
  TopbarIconBadge,
  TopbarImage,
} from "./TopBarStyle";
import { Link } from "react-router-dom";

import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const TopBar = () => {
  return (
    <TopbarContainer>
      <TopbarLeft>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>iMedia</Logo>
        </Link>
      </TopbarLeft>
      <TopbarCenter>
        <SearchBar>
          <Search style={{ marginLeft: "10px" }} />
          <SearchInput placeholder="Search for friend, post ot vedio" />
        </SearchBar>
      </TopbarCenter>
      <TopbarRight>
        <TopbarLinks>
          <TopbarLink>Homepage</TopbarLink>
          <TopbarLink>Timeline</TopbarLink>
        </TopbarLinks>
        <TopbarIcons>
          <TopbarIconItem>
            <Person />
            <TopbarIconBadge>2</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <Chat />
            <TopbarIconBadge>1</TopbarIconBadge>
          </TopbarIconItem>
          <TopbarIconItem>
            <Notifications />
            <TopbarIconBadge>3</TopbarIconBadge>
          </TopbarIconItem>
        </TopbarIcons>
        <TopbarImage src="./assets/person/profile.png"></TopbarImage>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default TopBar;
