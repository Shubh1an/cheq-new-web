import React from "react";
import { Link } from "react-router-dom";
import { CheqFooterLogo, Email } from "../../assets/icons/Icon-container";
import { SVG } from "../../assets/icons/icons-png";
import Container from "../CommonContainer/CommonContainer";
import "./Footer.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Footer() {
  const [FooterRef, FooterInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });
  return (
    <Container inner="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <motion.div
            ref={FooterRef}
            animate={{
              // opacity: titleInView ? 1 : 0,
              // scale: titleInView ? 1 : 0,
              y: FooterInView ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
          >
            <CheqFooterLogo />
            <p>
              Vaishnavi Summit, Ground Floor, 7th Main, 80 FeetRoad, 3rd Block,
              Koramangala Industrial Layout, , Bangalore, INDIA 560034
            </p>
            <div to="#" className="mail-container">
              <span>
                <Email emailClass="icon" />
              </span>
              help@cheq.one
            </div>
          </motion.div>
        </div>
        <div className="footer-right">
          <motion.div
            ref={FooterRef}
            animate={{
              // opacity: titleInView ? 1 : 0,
              // scale: titleInView ? 1 : 0,
              y: FooterInView ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
          >
            <p>Quick Menu</p>
            <ul>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Team</Link>
              </li>
              <li>
                <Link to="#">Investor</Link>
              </li>
              <li>
                <Link to="#">Contact US</Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>
            Made with <span>??????</span> India
          </p>
        </div>
        <p className="copyright-text">All Copyrights @Cheq</p>
      </div>
    </Container>
  );
}

export default Footer;
