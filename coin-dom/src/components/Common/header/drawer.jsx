import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link href="/">
            <p className="link">Home</p>
          </Link>
          <Link href="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link href="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link href="/educate">
            <p className="link">Learn</p>
          </Link>
          <Link href="/dashboard">
            <p className="link">Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
