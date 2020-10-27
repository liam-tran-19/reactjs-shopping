import React from "react";
import "../Navbar/Navbar.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-menu flex-row">
        <div className="nav-brand">
          <a className="text-gray">Fitness Today</a>
        </div>
        <div className="toggle-collapse">
          <div className="toggle-icons">
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div>
          <ul className="nav-items">
            <li className="nav-link">
              <a href="#">Home</a>
            </li>
            <li className="nav-link">
              <a href="#">Categories</a>
            </li>
            <li className="nav-link">
              <a href="#">Archive</a>
            </li>
            <li className="nav-link">
              <a href="#">Pages</a>
            </li>
            <li className="nav-link">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="social text-gray">
          <a href="http://facebook.com/hongsoncht" target="_blank">
            <i>
              <FaFacebook />
            </i>
          </a>
          <a href="http://instagram.com/soontrann" target="_blank">
            <i>
              <FaInstagram />
            </i>
          </a>
          <a href="https://twitter.com/hongson_97" target="_blank">
            <i>
              <FaTwitter />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/hongsontran" target="_blank">
            <i>
              <SiIndeed />
            </i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
