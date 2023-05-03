import React, { useEffect } from "react";
import bag from "../../img/briefcase.png";
import calendar from "../../img/calendar.png";
import "./Qualification.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Qualification() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="Section"
      id="Experience"
    >
      <span className="title">Experience and Education</span>
      <div className="blured"></div>
      <span className="title1">Qualification</span>

      <div className="section-Container">
        <div className="section-title">
          <div className="qual-title">
            <span className="work-exp">
              <img className="work-icon" src={bag} alt="" />
              Work Experience
            </span>
          </div>

          <div className="title-container">
            <span>Software Developer</span>
            <div className="firstPart">
              <span className="first">
                <img className="work-iconSmall" src={bag} alt="" />
                ITC Infotech Private Limited
              </span>
              <span className="first">
                <img className="work-iconSmall" src={calendar} alt="" />
                Jan 2021 - Present
              </span>
            </div>
            <div className="Tasks">
              <ul className="Tasks-ul">
                <li>
                  Developed and maintained code for client websites primarily
                  using CSS,JavaScript and java.
                </li>
                <li>
                  Wrote performant, robust code and contributed in designing and
                  developing User Interface for a diverse array of client and
                  internal projects.
                </li>
                <li>
                  Interfaced with other developers to develop, document, and
                  manage the web application using Thingworx, Windchill (PTC
                  Products) and integration connectors.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-title">
          <div className="qual-title">
            <span className="work-exp">
              <img className="work-icon" src={bag} alt="" />
              Education
            </span>
          </div>

          <div className="title-container">
            <span>Masters in Information Technology</span>
            <div className="secondPart">
              <span className="first">
                <img className="work-iconSmall" src={bag} alt="" />
                University of North Carolina at Charlotte
              </span>
              <span className="first1">
                <img className="work-iconSmall" src={calendar} alt="" />
                Aug 2023 - 2025
              </span>
            </div>
          </div>

          <div className="title-container1">
            <span>B-Tech in Electronics And Telecommunication</span>
            <div className="secondPart">
              <span className="first">
                <img className="work-iconSmall" src={bag} alt="" />
                Kalinga Institute of Industrial Technology, Odisha
              </span>
              <span className="first">
                <img className="work-iconSmall" src={calendar} alt="" />
                2016 - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
