import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SVG } from "../../assets/icons/icons-png";
import $ from "jquery";
import Button from "../Button/Button";
import "./Header.css";
import { CheqLogo } from "../../assets/icons/Icon-container";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let Home = document.querySelector(".scrollClass");
  let Team = document.querySelector(".people-container");
  let Investors = document.querySelector(".home-middle-container");
  let ContactUs = document.querySelector(".job-card");
  let Career = document.querySelector(".top-main-content");
  const navigate = useNavigate();
  const [scroll, setScroll] = useState("home");
  const [first, setfirst] = useState();
  useEffect(() => {
    Team = document.querySelector(".people-container");
    ContactUs = document.querySelector(".job-card");
    Career = document.querySelector(".top-main-content");
    Investors = document.querySelector(".home-middle-container");
    Home = document.querySelector(".scrollClass");
    if (scroll == "career") {
      setTimeout(() => {
        let url =
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ];
        if (url === "career") {
          console.log("sdssss", ContactUs.getBoundingClientRect().top);

          doScrolling(ContactUs.getBoundingClientRect().top);
        }
      }, 500);
    }

    // if (scroll == "Team") {
    setTimeout(() => {
      let url =
        window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ];
      console.log(window.location.href.split("/"));
      if (url === "") {
        if (scroll == "Home") {
          doScrolling(Home.getBoundingClientRect().top);
        }
        if (scroll == "Team") {
          doScrolling(Team.getBoundingClientRect().top);
        }
        if (scroll == "Investors") {
          doScrolling(Investors.getBoundingClientRect().top);
        }
        if (scroll == "Career") {
          doScrolling(Career.getBoundingClientRect().top);
        }
      }
    }, 500);
    // }
    setScroll("home");
  }, [scroll]);
  function doScrolling(elementY, duration = 500) {
    console.log("Home.scrollTop", Home.scrollTop);
    let startingY = Home.scrollTop;
    console.log("startingY", startingY, elementY);
    let diff = elementY;
    let start;

    if (diff == 0) {
      Home.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    else {
      console.log("first", diff);
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        let time = timestamp - start;
        // Get percent of completion in range [0, 1].
        let percent = Math.min(time / duration, 1);

        Home.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    }
  }

  const JoinUs = (page) => {
    // ContactUs = document.querySelector(".job-card");

    if (page == "career") {
      navigate(page);
      setScroll(page);
    } else {
      navigate("/");

      setScroll(page);
    }
  };

  return (
    <div className="header-container">
      <div className="header-main">
        <div className={`hamburger-icon`} onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? SVG.CROSS_ICON : SVG.BURGER} className="icon" />
        </div>
        <div onClick={() => navigate("/")} className="header-logo">
          {/* <img src={SVG.CHEQ_LOGO} className="head-icon cheq-icon" /> */}
          <CheqLogo logoClass="head-icon cheq-icon" />
        </div>
        {/* <div className="right-side"> */}
        <div className={`header-link-container ${isOpen && "drawer-open"}`}>
          <div className="drawer-top">
            <div
              onClick={() => {
                JoinUs("Home");

                setIsOpen(false);
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                JoinUs("Team");

                setIsOpen(false);
              }}
            >
              Team
            </div>
            <div
              onClick={() => {
                JoinUs("Investors");

                setIsOpen(false);
              }}
            >
              Investors
            </div>
            <div
              onClick={() => {
                JoinUs("Career");

                setIsOpen(false);
              }}
            >
              Career
            </div>
          </div>
          <div className="drawer-bottom"></div>
        </div>
        <Button
          bttnClass="join-btn"
          handleFunction={() => {
            JoinUs("career");
          }}
        >
          Join Us
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Header;
