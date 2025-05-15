import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="ttop_vid">
        <div className="video-overlay-container">
          <img src="./bgvd.gif" alt="" />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            
            <div className="a-videa">
              <video
              
                src="vid 1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="header-video"
              ></video>
              
            </div>
            <div className="button">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora rerum laudantium, non delectus natus tenetur
              </p>
              <div className="buttons">
                <button className="blob-btn">
                  
                  What I Do
                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                      <span className="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>

                {/* SVG filter for gooey effect */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  style={{ display: "none" }}
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="10"
                      />
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                        result="goo"
                      />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
