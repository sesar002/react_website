import React from "react";
import "../style.scss";

const Team = () => {
  return (
    <div className="team">
      <h1>Our Team</h1>
      <div className="teamcont">
        <div className="teambox">
          <div className="imgdiv img2"></div>
          <h3>King</h3>
          <span>Founter</span>
          <p>Main speciality solidity contracts</p>
        </div>
        <div className="teambox">
          <div className="imgdiv img1"></div>
          <h3>LilPumper</h3>
          <span>Marketing</span>
          <p>Marketing expert. Also good boi.</p>
        </div>
        <div className="teambox">
          <div className="imgdiv img3"></div>
          <h3>Ares</h3>
          <span>Visionary</span>
          <p>Plays fetch with yo finger</p>
        </div>
        <div className="teambox">
          <div className="imgdiv img4"></div>
          <h3>420 Kenny</h3>
          <span>Fud Executioner</span>
          <p>Does nothing</p>
        </div>
        <div className="teambox">
          <div className="imgdiv img5"></div>
          <h3>Roxie</h3>
          <span>PumpDev</span>
          <p>G.I. doge. Retired now.</p>
        </div>
        <div className="teambox">
          <div className="imgdiv img6"></div>
          <h3>Boxer</h3>
          <span>Dev and Design</span>
          <p>Web design and front-end</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
