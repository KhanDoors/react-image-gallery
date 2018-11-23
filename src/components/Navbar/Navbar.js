import React from "react";
import "./Navbar.scss";
import logo from "../../bird1.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Gallery" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
