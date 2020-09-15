import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import AddStreamButton from "../AddStreamButton";
import "./styles.scss";

const Navbar: React.FC<{}> = (props) => {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <AddStreamButton />
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
