import React, { useEffect } from "react";
import "./Xamid2.css";

const Xamid2 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".observed");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animateClasses = el.getAttribute("data-animate");
            if (animateClasses) {
              el.classList.add(...animateClasses.split(" "));
            }
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <div className="xam2">
      <div className="container">
        <div className="xam2__wrapper">
          <h1
            className="xam2-h1 observed"
            data-animate="animate slide-left pop delay-4"
          >
            My <a>Skills</a>
          </h1>

          <div className="xam2__content">
            {/* === HTML Card === */}
            <div className="wrap observed" data-animate="animate pop">
              <div className="overlay">
                <div
                  className="overlay-content observed"
                  data-animate="animate slide-left delay-2"
                >
                  <h1
                    className="observed"
                    data-animate="animate slide-left pop delay-4"
                  >
                    HTML
                  </h1>
                  <p
                    className="observed"
                    data-animate="animate slide-left pop delay-5"
                    style={{
                      color: "black",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    Builds the structure.
                  </p>
                </div>
                <div
                  className="image-content observed"
                  data-animate="animate slide delay-5"
                >
                  <img src="./HTML01.png" alt="" />
                </div>
                <div className="dots observed" data-animate="animate">
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-6"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-7"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-8"
                  ></div>
                </div>
              </div>
              <div className="text">
                <p className="pp1">
                  HTML (HyperText Markup Language) is the standard language used
                  to create the structure of web pages. It consists of various
                  elements like headings, paragraphs, links, and images. HTML
                  provides the basic framework of a website, which is later
                  styled and made interactive with CSS and JavaScript.
                </p>
              </div>
            </div>

            {/* === CSS Card === */}
            <div className="wrap observed" data-animate="animate pop">
              <div className="overlay">
                <div
                  className="overlay-content observed"
                  data-animate="animate slide-left delay-2"
                >
                  <h1
                    className="observed"
                    data-animate="animate slide-left pop delay-4"
                  >
                    CSS
                  </h1>
                  <p
                    className="observed"
                    data-animate="animate slide-left pop delay-5"
                    style={{
                      color: "black",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    Styles the page.
                  </p>
                </div>
                <div
                  className="image-content observed"
                  data-animate="animate slide delay-5"
                >
                  <img src="./CSS01.png" alt="" />
                </div>
                <div className="dots observed" data-animate="animate">
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-6"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-7"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-8"
                  ></div>
                </div>
              </div>
              <div className="text">
                <p className="pp1">
                  CSS (Cascading Style Sheets) is used to control the appearance
                  and layout of web pages. It allows developers to style HTML
                  elements with colors, fonts, spacing, positioning, and
                  animations. CSS helps make websites look visually attractive
                  and responsive across different devices.
                </p>
              </div>
            </div>

            {/* === JS Card === */}
            <div className="wrap observed" data-animate="animate pop">
              <div className="overlay">
                <div
                  className="overlay-content observed"
                  data-animate="animate slide-left delay-2"
                >
                  <h1
                    className="observed"
                    data-animate="animate slide-left pop delay-4"
                  >
                    JS
                  </h1>
                  <p
                    className="observed"
                    data-animate="animate slide-left pop delay-5"
                    style={{
                      color: "black",
                      marginBottom: "10px",
                      fontSize: "20px",
                    }}
                  >
                    Adds interactivity.
                  </p>
                </div>
                <div
                  className="image-content observed"
                  data-animate="animate slide delay-5"
                >
                  <img src="./JS011.png" alt="" />
                </div>
                <div className="dots observed" data-animate="animate">
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-6"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-7"
                  ></div>
                  <div
                    className="dot observed"
                    data-animate="animate slide-up delay-8"
                  ></div>
                </div>
              </div>
              <div className="text">
                <p className="pp1">
                  JavaScript is a programming language used to add interactivity
                  and dynamic behavior to web pages. It can respond to user
                  actions, change content without reloading the page, and
                  control multimedia. JavaScript works alongside HTML and CSS to
                  create fully functional and engaging websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xamid2;
