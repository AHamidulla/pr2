import React, { useEffect } from "react";
import "./Xamid6.css";

const Xamid6 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="xamid6 animate-hidden">
        <div className="container">
          <div className="xamid6_wrapper animate-hidden">
            <div className="xam6-cont1 animate-hidden">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Your website (If exists)" />
              <input type="text" className="inp1" placeholder="How can I help?" />
              <ul>
                <li>
                  <button>Get In Touch</button>
                </li>
                <li>
                  <a href="#">
                    <img className="activ-a" src="./xamcon1.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./xamcon2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./xamcon3.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./xamcon4.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="xam6-cont2 animate-hidden">
              <h1>
                Let’s <a>talk</a>for <br />
                Something special
              </h1>
              <p>
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
              <h2>Ham351525@gmail.com</h2>
              <h2>977779180</h2>
            </div>
          </div>
        </div>
        <div className="conn3 animate-hidden">
          <h1>Xamidulla</h1>
          <ul>
            <li><h2>@ 2019-2023 Personal</h2></li>
            <li><h2>Made In Figma</h2></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Xamid6;
