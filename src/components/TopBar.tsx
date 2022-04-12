import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useContext } from "react";

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
import { AuthContext } from "../context/AuthContext";

const TopBar = () => {
  const { user } = useContext(AuthContext);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
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
        <Link to={`/profile/${user.username}`}>
          <TopbarImage
            src={
              user.profilePicture
                ? PublicFolder + user.profilePicture
                : PublicFolder + "person/noAvatar.png"
            }
          ></TopbarImage>
        </Link>
      </TopbarRight>
    </TopbarContainer>
  );
};

export default TopBar;
