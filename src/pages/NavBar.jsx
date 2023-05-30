import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/products"
        >
          Products
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
