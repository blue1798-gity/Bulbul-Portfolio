import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Git from "@iconscout/react-unicons/icons/uil-github";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer_bg">
      <div className="footer_container container grid">
        <div>
          <h1 className="footer_title">Bulbul</h1>
          <span className="footer_subtitle">Frontend Developer</span>
        </div>

        <ul className="footer_links">
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
          <li>
            <Link spy={true} to="Contact" smooth={true}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="footer_icon">
          <a>
            <Insta color="white" size="2rem" />
          </a>
          <a href="https://github.com/blue1798-gity">
            <Git color="white" size="2rem" />
          </a>
          <a href="https://www.linkedin.com/in/bulbul-roy-984760185">
            <Linked color="white" size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
