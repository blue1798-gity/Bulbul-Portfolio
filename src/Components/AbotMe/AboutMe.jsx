import React from "react";
import "./AboutMe.css";
import profile from "../../img/ProfilePic.jpg";

export default function AboutMe() {
  return (
    <div className="aboutMe" id="About">
      {/*left side*/}
      <div className="me">
        <span>About</span>
        <span>Me...</span>
        <div>
          <img className="headshot" src={profile} alt="Headshot" />
        </div>
      </div>
      {/*right side*/}
      <div className="myIntro">
        <span className="myIntro-full">
          Hi, I'm Bulbul Roy a Web Development enthusiast and always learning
          while coding.I adore fusing the logical and artistic design to create
          appealing, approachable, and user-friendly websites and applications.I
          value tiny nuances and look for delight in the little things as a
          person.
          <br />
          <br /> Technology sets the pace, and the rest of the world follows.I
          think it's important to engage towards promoting inclusion and
          diversity in the sector through representation.
          <br />
          <br /> I can't wait to take the plunge and continue honing my
          abilities with the proper institution. Use the contact form to send me
          an email or a quick note.
        </span>
        {/* <div className="blur"></div> */}
      </div>
    </div>
  );
}
