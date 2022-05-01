import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md" id="header">
        <ul className="navbar-nav" id="component">
          <li>
            <Link className="nav-link" to="/home" id="home">
              Home Manage
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          <li>
            <Link className="nav-link" to="/department">
              Department
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/employee">
              Employee
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
