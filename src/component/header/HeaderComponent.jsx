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
            <Link className="nav-link" to="/home">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <a class="navbar-brand" href="/home">
    //     Home Manage
    //   </a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   ></button>
    //   <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    //     <div class="nav nav-pills ">
    //       <a class="nav-item nav-link badge-success " href="/department">
    //         Department
    //       </a>
    //       <a class="nav-item nav-link badge-success ml-3 " href="/employee">
    //         Employee
    //       </a>
    //     </div>
    //     <nav class="ml-auto font-weight-bold">
    //       Demo-Project
    //     </nav>
    //   </div>
    // </nav>
  );
};

export default HeaderComponent;
