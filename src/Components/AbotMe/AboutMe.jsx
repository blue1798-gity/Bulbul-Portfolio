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
          Hello! I am Bulbul Roy, an aspiring Frontend Developer who likes
          designing and developing beautiful websites. My interest in web
          devlopment started when I joined the company that I'm currently
          working in, where we had to work on a development project in which we
          devloped a web application using thingworx which involves languages
          like CSS, Javascript and Java. I look forward to learn more and more
          as I step forward with my frontend journey.
        </span>
        {/* <div className="blur"></div> */}
      </div>
    </div>
  );
}
