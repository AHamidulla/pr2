import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-wrapper">
          <input
            className="menu-icon"
            type="checkbox"
            id="menu-icon"
            name="menu-icon"
          />
          <label htmlFor="menu-icon"></label>

          <nav className="nav">
            <ul className="pt-5">
              <li>
                <a href="#about">ABOUT ME</a>
              </li>
              <li>
                <a href="#work">MY WORK</a>
              </li>
              <li>
                <a href="#plus">PLUS</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Top;
