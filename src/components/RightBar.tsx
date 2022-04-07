import {
  BirthdayContainer,
  BirthdayImage,
  BirthdayText,
  RightbarAd,
  RightbarContainer,
  RightbarFriendList,
  RightbarTitle,
  RightbarWrapper,
} from "./RightBarStyle";
import { Users } from "../data";
import OnlineFriend from "./OnlineFriend";

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
        <RightbarAd src="./assets/ad.jpg"></RightbarAd>
        <RightbarTitle>Online Friends</RightbarTitle>
        <RightbarFriendList>
          {Users.map((userItem) => (
            <OnlineFriend user={userItem} key={userItem.id} />
          ))}
        </RightbarFriendList>
      </RightbarWrapper>
    </RightbarContainer>
  );
};

export default RightBar;
