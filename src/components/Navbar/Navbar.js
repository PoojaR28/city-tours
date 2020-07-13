import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src={process.env.PUBLIC_URL + "/img/download.jpg"}
        alt="company logo"
        width="100"
        height="50"
      />
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
          <a href="/" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
