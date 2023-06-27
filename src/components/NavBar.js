import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  padding: "10px",
  textDecoration: "none",
  fontSize: "larger",
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
