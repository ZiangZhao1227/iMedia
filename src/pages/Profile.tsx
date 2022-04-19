import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import { BASE_URL } from "../api/baseUrl";
import { PublicFolder } from "../api/baseUrl";

const Profile = () => {
  const [user, setUser] = useState<any>({});
  const { username } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${BASE_URL}users?username=${username}`);
      setUser(res.data.userInfo);
    };
    fetchUser();
  }, [username]);
  return (
    <Fragment>
      <TopBar />
      <ProfileContainer>
        <SideBar />
        <ProfileRight>
          <ProfileRightTop>
            <ProfileCover>
              <ProfileCoverImage
                src={
                  user.coverPicture
                    ? PublicFolder + user.coverPicture
                    : PublicFolder + "person/noCover.jpeg"
                }
              ></ProfileCoverImage>
              <ProfileUserImage
                src={
                  user.profilePicture
                    ? PublicFolder + user.profilePicture
                    : PublicFolder + "person/noAvatar.png"
                }
              ></ProfileUserImage>
            </ProfileCover>
            <ProfileInfo>
              <ProfileInfoName>{user.username}</ProfileInfoName>
              <ProfileInfoDesc>{user.desc}</ProfileInfoDesc>
            </ProfileInfo>
          </ProfileRightTop>
          <ProfileRightBottom>
            <Feed username={username} />
            <RightBar user={user} />
          </ProfileRightBottom>
        </ProfileRight>
      </ProfileContainer>
    </Fragment>
  );
};

export default Profile;
