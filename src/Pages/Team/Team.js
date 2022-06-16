import React from "react";
import { FanImage } from "../../assets/icons/Icon-container";
import { SVG } from "../../assets/icons/icons-png";
import ProfileContainer from "../../Components/Card/ProfileCard/ProfileContainer";
import Container from "../../Components/CommonContainer/CommonContainer";
import Footer from "../../Components/Footer/Footer";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Team.css";
import { ProfileData } from "../../Data/DummyData";
function Team() {
  const TopContent = {
    heading: "Meet the founders & Team",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding way",
    cardImg: <FanImage />,
    classname: "team-profile",
  };

  return (
    <>
      <div class="career-parallax">
        <div class="parallax__career parallax__career__layer--back parallax__Team  parallax__Team_special">
          <TopContainer TopContent={TopContent} />
        </div>

        <div class="parallax__career-1 parallax__career__layer--base">
          <Container inner="team-container">
            <h3 className="head-title">A - Team</h3>
            <p>
              Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding
              way.
            </p>
            <div className="background-blur"></div>
          </Container>
          <Container inner="profileContainer">
            {ProfileData.map((profile, index) => (
              <ProfileContainer
                customstyle="profile-style1"
                profileContent="profile-content1"
                profile={profile}
                key={index}
              />
            ))}
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Team;
