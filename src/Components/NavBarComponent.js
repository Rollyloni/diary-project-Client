import React from "react";
import "../Pages/HomePage.scss";
import { NavLink } from "react-router-dom";
import "../Components/NavBarComponent.scss";

const NavBarComponent = () => {
  return (
    <div>
      <ul className="links">
        <li>
          <NavLink to="/" className="links__section">
            Add New entry
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className="links__section">
            Add an entertainment
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" className="links__section">
            Add a Description
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBarComponent;
