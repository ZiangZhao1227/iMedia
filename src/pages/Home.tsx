import { Fragment } from "react";

import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { HomeContainer } from "./HomeStyle";

const Home = () => {
  return (
    <Fragment>
      <TopBar />
      <HomeContainer>
        <SideBar />
        <Feed />
        <RightBar />
      </HomeContainer>
    </Fragment>
  );
};

export default Home;
