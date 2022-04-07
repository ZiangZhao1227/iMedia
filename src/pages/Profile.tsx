import { Fragment } from "react";

import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {
  ProfileContainer,
  ProfileCover,
  ProfileCoverImage,
  ProfileInfo,
  ProfileInfoDesc,
  ProfileInfoName,
  ProfileRight,
  ProfileRightBottom,
  ProfileRightTop,
  ProfileUserImage,
} from "./ProfileStyle";

const Profile = () => {
  return (
    <Fragment>
      <TopBar />
      <ProfileContainer>
        <SideBar />
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverImage src="./assets/post/3.jpeg"></ProfileCoverImage>
              <ProfileUserImage src="./assets/person/profile.png"></ProfileUserImage>
            </ProfileCover>
            <ProfileInfo>
                <ProfileInfoName>TEST USER</ProfileInfoName>
                <ProfileInfoDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam placeat esse voluptates mollitia, aperiam id deserunt laborum vero. Labore?</ProfileInfoDesc>
            </ProfileInfo>
          </ProfileRightTop>
          <ProfileRightBottom>
            <Feed />
            <RightBar profile/>
          </ProfileRightBottom>
        </ProfileRight>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
