import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  BirthdayContainer,
  BirthdayImage,
  BirthdayText,
  RightbarAd,
  RightbarContainer,
  RightbarFriendList,
  RightbarInfoItem,
  RightbarInfoKey,
  RightbarTitle,
  RightbarInfo,
  RightbarHeader,
  RightbarWrapper,
  RightbarInfoValue,
  RightbarFollowings,
  RightbarFollowing,
  RightbarFollowingImage,
  RightbarFollowingName,
} from "./RightBarStyle";
import { Users } from "../data";
import OnlineFriend from "./OnlineFriend";
import { BASE_URL } from "../api/baseUrl";

const RightBar = ({ user }: any) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState<any>([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const list = await axios.get(`${BASE_URL}users/friends/${user._id}`);
        setFriends(list.data.friendList);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <Fragment>
        <BirthdayContainer>
          <BirthdayImage src={`${PublicFolder}gift.png`}></BirthdayImage>
          <BirthdayText>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </BirthdayText>
        </BirthdayContainer>
        <RightbarAd src={`${PublicFolder}ad.jpg`}></RightbarAd>
        <RightbarTitle>Online Friends</RightbarTitle>
        <RightbarFriendList>
          {Users.map((userItem) => (
            <OnlineFriend user={userItem} key={userItem.id} />
          ))}
        </RightbarFriendList>
      </Fragment>
    );
  };

  const ProfileRightbar = () => {
    return (
      <Fragment>
        <RightbarHeader>User Information</RightbarHeader>
        <RightbarInfo>
          <RightbarInfoItem>
            <RightbarInfoKey>City: </RightbarInfoKey>
            <RightbarInfoValue>{user.city}</RightbarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightbarInfoKey>From: </RightbarInfoKey>
            <RightbarInfoValue>{user.from}</RightbarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightbarInfoKey>Relationship: </RightbarInfoKey>
            <RightbarInfoValue>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </RightbarInfoValue>
          </RightbarInfoItem>
        </RightbarInfo>
        <RightbarHeader>User Friends</RightbarHeader>
        <RightbarFollowings>
          {friends.map((friend: any) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
              key={friend._id}
            >
              <RightbarFollowing>
                <RightbarFollowingImage
                  src={
                    friend.profilePicture
                      ? PublicFolder + friend.profilePicture
                      : PublicFolder + "person/noAvatar.png"
                  }
                ></RightbarFollowingImage>
                <RightbarFollowingName>{friend.username}</RightbarFollowingName>
              </RightbarFollowing>
            </Link>
          ))}
        </RightbarFollowings>
      </Fragment>
    );
  };

  return (
    <RightbarContainer>
      <RightbarWrapper>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default RightBar;
