import React from "react";
import Header from "../components/Common/header";
import MainComponent from "../components/LandingPage/MainComp";

function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <MainComponent />
    </div>
  );
}

export default HomePage;
