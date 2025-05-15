import React, { useEffect, useRef } from "react";
import "./Xamid5.css";

const projects = [
  { id: 1, image: "./f1.png", reverse: false },
  { id: 2, image: "./f2.png", reverse: true },
  { id: 3, image: "./f3.png", reverse: false },
  { id: 4, image: "./f4.png", reverse: true },
  { id: 5, image: "./f5.png", reverse: false },
];

const Xamid5 = () => {
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          const content = entry.target.querySelector(".xam5-content");

          if (entry.isIntersecting) {
            if (video) video.play();
            entry.target.classList.add("visible");
            content.classList.add("animate");
          } else {
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
            entry.target.classList.remove("visible");
            content.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.classList.add("animate-title");
          } else {
            titleRef.current.classList.remove("animate-title");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="xamid5">
      <div className="container">
        <div className="xamid5_wrapper">
          <h1 className="xamid5_title2" ref={titleRef}>
            My <a>Projects</a>
          </h1>

          {projects.map(({ id, image, reverse }, index) => (
            <div
              className={`xam5-con1 ${reverse ? "reverse" : ""}`}
              key={id}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <img src={image} alt={`Project ${id}`} className={`F${id}`} />
              <ul className="xam5-content">
                <li className="num">0{id}</li>
                <li>
                  <h1>Crypto Screener Application</h1>
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident commodi id quasi alias quibusdam, maxime odit quo,
                  earum non ipsa quas reprehenderit unde similique ea iste
                  placeat perspiciatis tempore nobis.
                </p>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Xamid5;
