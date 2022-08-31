import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="wrapper" id="Navbar">
      <div className="left-side">
        <div className="name">Bulbul</div>
        <Toggle />
      </div>
      <div className="right-side">
        <div className="list">
          <ul>
            <li>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                Home
              </Link>
            </li>

            <li>
              <Link spy={true} to="About" smooth={true}>
                About Me
              </Link>
            </li>

            <li>
              <Link spy={true} to="Skills" smooth={true}>
                Skills
              </Link>
            </li>

            <li>
              <Link spy={true} to="Experience" smooth={true}>
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact me</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
