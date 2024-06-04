import React from "react";
import "./styles.css";

function Grid({ coin }) {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src={coin.image} alt="coin-img" className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Grid;
