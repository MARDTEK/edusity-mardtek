import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img className="play-icon" src={play_icon} alt="" onClick={ () => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university,
          where innovation meets tradition.
        </p>
        <p>
          Our dynamic curriculum, state-of-the-art facilities, and dedicated
          faculty are designed to empower students to achieve their full
          potential.
        </p>
        <p>
          Join a vibrant community that fosters critical thinking, creativity,
          and a commitment to lifelong learning.
        </p>
      </div>
    </div>
  );
};

export default About;
