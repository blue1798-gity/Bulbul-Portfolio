import React, { useState, useEffect } from "react";

import "./Intro.css";
import Github from "../../img/github.png";
import LinkdIn from "../../img/linkedin.png";
import instagram from "../../img/insta.png";
import blue from "../../img/blue.png";
import Resume from "./Resume.pdf";
import "animate.css";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Bulbul"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi I'm</span>
          <span className="wrap">{text}</span>
          <span>I like to design and bring ideas to life through code.</span>
        </div>

        <a href={Resume} download>
          <button className="button i-button">Dowload CV</button>
        </a>
        <div className="i-icon">
          <a href="https://github.com/blue1798-gity">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/bulbul-roy-984760185">
            <img src={LinkdIn} alt="" />
          </a>
          <img src={instagram} alt="" />
        </div>
      </div>

      <div className="i-right">
        <img className="image" src={blue} alt="" />
      </div>
    </div>
  );
};

export default Intro;
