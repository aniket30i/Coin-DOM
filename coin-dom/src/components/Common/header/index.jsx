import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../../Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">
          CoinDOM<span style={{ color: "var(--purple)" }}>.</span>
        </h1>
      </Link>

      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        {/* <Link to=" /watchlist">
          <p className="link">Watchlist</p>
        </Link> */}
        <Link to="/educate">
          <p className="link">Learn</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("Button clicked")}
            outlined={false}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
