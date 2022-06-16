import React, { useState } from "react";
import { CareerImage } from "../../assets/icons/Icon-container";
import { SVG } from "../../assets/icons/icons-png";
import Footer from "../../Components/Footer/Footer";
import CustomModal from "../../Components/Modal/Modal";
import TopContainer from "../../Components/Top-Container/TopContainer";
import "../../css/Career.css";
import CareerMiddleContainer from "./Career-Middle-Container/CareerMiddleContainer";

function Career() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Job, setJob] = useState({});
  function openModal(Job) {
    setIsOpen(true);
    setJob(Job);
  }

  const TopContent = {
    heading: "Join us in the journey to best",
    subText:
      "Credit Cards, Buy Now Pay Later and Loans in a quick and rewarding",
    cardImg: <CareerImage />,
    classname: "Career-top-container",
  };
  return (
    <div className="main">
      <CustomModal
        job={Job}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setJob={setJob}
      />
      <div class="career-parallax scrollClass">
        <div class="parallax__career parallax__career__layer--back parallax__career_special">
          <TopContainer TopContent={TopContent} />
        </div>

        <div class="parallax__career-1 parallax__career__layer--base career">
          <CareerMiddleContainer openModal={openModal} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Career;
