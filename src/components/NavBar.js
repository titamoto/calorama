import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  color: "black",
  padding: "10px",
  textDecoration: "none",
  //marginLeft: "10px",
};

function NavBar() {
  return (
    <nav>
      <NavLink to="/" exact style={linkStyles}>
        All Food
      </NavLink>
      <NavLink to="/saved-food" exact style={linkStyles}>
        Saved Foods
      </NavLink>
      <button id="add-food-button">
        <NavLink to="/add-food" exact style={linkStyles}>
          Add Food
        </NavLink>
      </button>
    </nav>
  );
}

export default NavBar;
