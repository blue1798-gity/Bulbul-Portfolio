import React from "react";
import "./Skills.css";
import Card from "../Cards/Card.jsx";
import js from "../../img/javascript.png";
import css from "../../img/css.png";
import html from "../../img/html.png";
import java from "../../img/java.png";
import react from "../../img/react.png";
import AOS from "aos";
import "aos/dist/aos.css";
import twx from "../../img/twx.png";
import wc from "../../img/WC.png";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skill" id="Skills">
      <div className="mySkill">
        <span>My</span>
        <span> Skills...</span>
      </div>
      {/* right side */}
      <div className="skillCards">
        <div className="blury"></div>
        <div className="firsty-card">
          <div className="skill-Cards1">
            <Card
              aos="fade-up"
              aos_offset="200"
              emoji={js}
              descript={"JavaScript"}
            />
          </div>

          <div className="skill-Cards2">
            <Card
              aos="fade-down"
              aos_offset="200"
              emoji={css}
              descript={"CSS"}
            />
          </div>

          <div className="skill-Cards3">
            <Card
              aos="fade-up"
              aos_offset="200"
              emoji={html}
              descript={"HTML"}
            />
          </div>

          <div className="skill-Cards4">
            <Card
              aos="fade-down"
              aos_offset="200"
              emoji={java}
              descript={"Java"}
            />
          </div>
          <div className="skill-Cards5">
            <Card
              aos="fade-up"
              aos_offset="200"
              emoji={react}
              descript={"React"}
            />
          </div>
          <div className="skill-Cards6">
            <Card
              aos="fade-down"
              aos_offset="200"
              emoji={twx}
              descript={"Thingworx"}
            />
          </div>
          <div className="skill-Cards7">
            <Card
              aos="fade-up"
              aos_offset="200"
              emoji={wc}
              descript={"Windchill"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
