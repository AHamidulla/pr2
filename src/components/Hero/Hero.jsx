import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className="Top_text">
        <ul>
          <li className="li-li1">I'M A DIGITAL</li>
          <li>
            <span className="li">
              <video
                className="video"
                src="./vid4.mp4"
                autoPlay
                muted
                loop
              ></video>
              <li className="li-li2">WEB DESIGNER</li>
            </span>
          </li>
          <li className="li-li3">WITH COOL PROJECTS.</li>
        </ul>
      </div>
      <div className="ttop_vid">
        <div className="video-overlay-container">
          <video
            className="vv2"
            src="./bgvd.gif"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
