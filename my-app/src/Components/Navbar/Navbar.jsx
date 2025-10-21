import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* ✅ اللوجو هو لينك لصفحة الهوم */}
        <h2 className="logo">
          <Link to="/">START FRAMEWORK</Link>
        </h2>

        <ul className="nav-links">
          {/* حذف HOME */}
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
