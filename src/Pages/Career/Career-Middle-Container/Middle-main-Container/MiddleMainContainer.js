import React from "react";
import { SVG } from "../../../../assets/icons/icons-png";
import Container from "../../../../Components/CommonContainer/CommonContainer";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function MiddleMainContainer() {
  const Data = [
    {
      heading: "Health comes first",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
    {
      heading: "Flexible working hours",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
    {
      heading: "Take time off",
      text: "We act like owners — This is our company. We own the problems and challenges with commitment. ",
    },
  ];
  const [lifeAtCheqRef, lifeAtCheqInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });
  const [lifeAtCheqDetailsRef, lifeAtCheqDetailsInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });
  const TextContainer = ({ content }) => {
    return (
      <div className="text-container">
        <h3>
          <span>⬤</span>
          {content.heading}
        </h3>
        <p>{content.text}</p>
      </div>
    );
  };
  return (
    <Container inner="cheq-container">
      <motion.div
        ref={lifeAtCheqRef}
        animate={{
          // opacity: titleInView ? 1 : 0,
          // scale: titleInView ? 1 : 0,
          x: lifeAtCheqInView ? 0 : -100,
        }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="head-title">Life at Cheq</h3>
      </motion.div>

      <Container inner="cheq-content">
        <motion.div
          ref={lifeAtCheqDetailsRef}
          animate={{
            // opacity: titleInView ? 1 : 0,
            // scale: titleInView ? 1 : 0,
            x: lifeAtCheqDetailsInView ? 0 : -100,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="cheq-left">
            {Data.map((content, key) => (
              <TextContainer key={key} content={content} />
            ))}
          </div>
        </motion.div>
        <div className="cheq-right">
          <motion.div
            ref={lifeAtCheqDetailsRef}
            animate={{
              // opacity: titleInView ? 1 : 0,
              // scale: titleInView ? 1 : 0,
              x: lifeAtCheqDetailsInView ? 0 : 100,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="imageContainer">
              <div className="item">
                <img src={SVG.SWIM} />
              </div>
              <div className="item">
                <img src={SVG.GROUP} />
              </div>
              <div className="item big">
                <img src={SVG.OFFICE} />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Container>
  );
}

export default MiddleMainContainer;
