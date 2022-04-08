import { Fragment } from "react";

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

const RightBar = ({ profile }: any) => {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <Fragment>
        <BirthdayContainer>
          <BirthdayImage src="./gift.png"></BirthdayImage>
          <BirthdayText>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </BirthdayText>
        </BirthdayContainer>
        <RightbarAd src="./ad.jpg"></RightbarAd>
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
            <RightbarInfoValue>New York</RightbarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightbarInfoKey>From: </RightbarInfoKey>
            <RightbarInfoValue>China</RightbarInfoValue>
          </RightbarInfoItem>
          <RightbarInfoItem>
            <RightbarInfoKey>Relationship: </RightbarInfoKey>
            <RightbarInfoValue>Single</RightbarInfoValue>
          </RightbarInfoItem>
        </RightbarInfo>
        <RightbarHeader>User Friends</RightbarHeader>
        <RightbarFollowings>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/1.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/2.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/3.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/4.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/8.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
          <RightbarFollowing>
            <RightbarFollowingImage
              src={`${PublicFolder}person/9.jpeg`}
            ></RightbarFollowingImage>
            <RightbarFollowingName>John Doe</RightbarFollowingName>
          </RightbarFollowing>
        </RightbarFollowings>
      </Fragment>
    );
  };

  return (
    <RightbarContainer>
      <RightbarWrapper>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default RightBar;
