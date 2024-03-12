import React from "react";
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import NumPro from "../components/NumPro";

const Home = () => {
  return (
    <>
      <Header />
      <NumPro numberOfProjects="10" />
      <GetStarted />
      <GetInTouch />
    </>
  );
};

export default Home;
