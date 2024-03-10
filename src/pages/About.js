import React from "react";
import Content from "../components/Content";
import NumPro from "../components/NumPro";
import Gallery from "../components/Gallery";

const About = () => {
  return (
    <>
      {/* for testing purpose  */}
      {/* <Content /> */}

      {/* this is for picture showing */}
      <NumPro numberOfProjects="10" />
      <Gallery />
    </>
  );
};

export default About;
