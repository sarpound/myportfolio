import React from "react";
import Header from "../../components/header";
import Landingpage from "../../components/landingpage";
import AboutMe from "../../components/aboutme";
import Skill from "../../components/technicalSkill";
import Work from "../../components/work";
import ProjectEg from "../../components/projectEg";
import GameZone from "../../components/gamezone";
import Footer from "../../components/footer";
import { isDesktop } from "react-device-detect";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { onPage } from "../../redux/actions";
export default function Index() {
    const dispatch = useDispatch();
    dispatch(onPage("Home"))
  return (
    <>
      <div className="sectLanding">
        <div className="bg">
          <Header />
          <Landingpage />
        </div>
      </div>
      <AboutMe />
      <Skill />
      <Work />
      <ProjectEg />
      {isDesktop ? <GameZone /> : ""}

      <Footer />
    </>
  );
}
