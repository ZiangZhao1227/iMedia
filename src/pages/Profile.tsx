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
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Fragment>
      <TopBar />
      <ProfileContainer>
        <SideBar />
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverImage
                src={`${PublicFolder}post/3.jpeg`}
              ></ProfileCoverImage>
              <ProfileUserImage
                src={`${PublicFolder}person/4.jpeg`}
              ></ProfileUserImage>
            </ProfileCover>
            <ProfileInfo>
              <ProfileInfoName>TEST USER</ProfileInfoName>
              <ProfileInfoDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                veniam placeat esse voluptates mollitia, aperiam id deserunt
                laborum vero. Labore?
              </ProfileInfoDesc>
            </ProfileInfo>
          </ProfileRightTop>
          <ProfileRightBottom>
            <Feed />
            <RightBar profile />
          </ProfileRightBottom>
        </ProfileRight>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
