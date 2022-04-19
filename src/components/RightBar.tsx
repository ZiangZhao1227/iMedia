import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";

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
  RightBarFollowButton,
} from "./RightBarStyle";
import { Users } from "../data";
import OnlineFriend from "./OnlineFriend";
import { BASE_URL } from "../api/baseUrl";
import { AuthContext } from "../context/AuthContext";
import { PublicFolder } from "../api/baseUrl";

const RightBar = ({ user }: any) => {
  const [friends, setFriends] = useState<any>([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${currentUser.accessToken}`,
    },
  });

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

  const handleClick = async () => {
    try {
      if (followed) {
        await userRequest.put(`users/${user._id}/unfollow`);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await userRequest.put(`users/${user._id}/follow`);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

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
        {user.username !== currentUser.username && (
          <RightBarFollowButton onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </RightBarFollowButton>
        )}
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
