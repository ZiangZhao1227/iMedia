import {
  BirthdayContainer,
  BirthdayImage,
  BirthdayText,
  RightbarAd,
  RightbarContainer,
  RightbarFriendList,
  RightbarTitle,
  RightbarWrapper,
  RightbarFriend,
  RightbarProfileImageContainer,
  RightbarProfileImage,
  RightbarOnline,
  RightbarUsername,
} from "./RightBarStyle";

const RightBar = () => {
  return (
    <RightbarContainer>
      <RightbarWrapper>
        <BirthdayContainer>
          <BirthdayImage src="./assets/gift.png"></BirthdayImage>
          <BirthdayText>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </BirthdayText>
        </BirthdayContainer>
        <RightbarAd src="./assets/ad.png"></RightbarAd>
        <RightbarTitle>Online Friends</RightbarTitle>
        <RightbarFriendList>
          <RightbarFriend>
            <RightbarProfileImageContainer>
              <RightbarProfileImage src="./assets/person/3.jpeg"></RightbarProfileImage>
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImageContainer>
            <RightbarUsername>John Carter</RightbarUsername>
          </RightbarFriend>
          <RightbarFriend>
            <RightbarProfileImageContainer>
              <RightbarProfileImage src="./assets/person/3.jpeg"></RightbarProfileImage>
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImageContainer>
            <RightbarUsername>John Carter</RightbarUsername>
          </RightbarFriend>
          <RightbarFriend>
            <RightbarProfileImageContainer>
              <RightbarProfileImage src="./assets/person/3.jpeg"></RightbarProfileImage>
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImageContainer>
            <RightbarUsername>John Carter</RightbarUsername>
          </RightbarFriend>
          <RightbarFriend>
            <RightbarProfileImageContainer>
              <RightbarProfileImage src="./assets/person/3.jpeg"></RightbarProfileImage>
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImageContainer>
            <RightbarUsername>John Carter</RightbarUsername>
          </RightbarFriend>
          <RightbarFriend>
            <RightbarProfileImageContainer>
              <RightbarProfileImage src="./assets/person/3.jpeg"></RightbarProfileImage>
              <RightbarOnline></RightbarOnline>
            </RightbarProfileImageContainer>
            <RightbarUsername>John Carter</RightbarUsername>
          </RightbarFriend>
        </RightbarFriendList>
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default RightBar;
