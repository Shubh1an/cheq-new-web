import React from "react";
import { SVG } from "../../../../assets/icons/icons-png";
import Card from "../../../../Components/Card/Card";
import Container from "../../../../Components/CommonContainer/CommonContainer";
import { ValueData } from "../../../../Data/DummyData";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function MiddleTopContainer() {
  const ValueCard = ({ data }) => {
    return (
      <Card container="value-card">
        <div className="core-values-icon">{data.image}</div>
        <h3>{data.header}</h3>
        <p>{data.text}</p>
      </Card>
    );
  };
  const [careerTopRef, careerTopInView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px 0px",
  });
  return (
    <>
      <Container outer="" inner="middle-container">
        <motion.div
          ref={careerTopRef}
          animate={{
            // opacity: titleInView ? 1 : 0,
            // scale: titleInView ? 1 : 0,
            y: careerTopInView ? 0 : 100,
          }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="head-title">Core Values</h3>
          <Container outer="" inner="flex-container">
            {ValueData.map((data, index) => (
              <ValueCard key={index} data={data} />
            ))}
          </Container>
          <div className="background-blur"></div>
        </motion.div>
      </Container>
    </>
  );
}

export default MiddleTopContainer;
