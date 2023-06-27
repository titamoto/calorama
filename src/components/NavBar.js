import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  // color: "black",
  padding: "10px",
  textDecoration: "none",
  fontSize: "larger",
  //marginLeft: "10px",
};

const linkPressed = {
  display: "inline-block",
  color: "red",
  padding: "10px",
};

function NavBar() {
  return (
    <nav>
      <NavLink
        exact
        activeClassName="active-page-navlink"
        to="/"
        style={linkStyles}
      >
        All Food
      </NavLink>
      <NavLink
        exact
        activeClassName="active-page-navlink"
        to="/saved-food"
        style={linkStyles}
      >
        Saved Foods
      </NavLink>
      <NavLink
        exact
        activeClassName="active-page-navlink"
        to="/add-food"
        style={linkStyles}
      >
        Add Food
      </NavLink>
    </nav>
  );
}

export default NavBar;
