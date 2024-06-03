import React from "react";
import "./styles.css";
import Button from "../../Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

function MainComp() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-know-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Know & Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Learn and Track crypto through public apis in real time. Start your
          journey with a click on Educate.
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Button text={"Dashboard"} />
          <Button outlined={true} text={"Share"} />
        </motion.div>
      </div>
      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 3,
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComp;
