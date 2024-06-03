import React from "react";
import "./styles.css";
import Button from "../../Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";

function MainComp() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <h1 className="track-know-heading">Know & Track Crypto</h1>
        <h1 className="real-time-heading">Real Time.</h1>
        <p className="info-text">
          Learn and Track crypto through public apis in real time. Start your
          journey with a click on Educate.
        </p>
        <div className="btn-flex">
          <Button text={"Dashboard"} />
          <Button outlined={true} text={"Share"} />
        </div>
      </div>
      <div className="phone-container">
        <img src={iphone} className="iphone" />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComp;
