import React, { useEffect, useRef } from "react";
import "./Xamid1.css";

const Xamid1 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const iconRef1 = useRef(null);
  const iconRef2 = useRef(null);
  const iconRef3 = useRef(null);
  const iconRef4 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (imageRef.current)
        imageRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;

      if (textRef.current)
        textRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;

      if (iconRef1.current)
        iconRef1.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      if (iconRef2.current)
        iconRef2.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      if (iconRef3.current)
        iconRef3.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (iconRef4.current)
        iconRef4.current.style.transform = `translateY(${scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Xamid1">
      <div className="container">
        <div className="Xamid1__wrapper">
          <div className="xam-content">
            <div className="xamcon1" ref={textRef}>
              <h1>
                Hello I Am <a>A.Xamid <br /> Fronted</a>Developer
                <br /> Based In <a>Uzb.</a>
              </h1>
              <p>
                I am a frontend developer with over three years of experience...
              </p>
              <ul>
                <li ref={iconRef1}>
                  <a className="activ-a" href="#">
                    <img src="./xamcon1.png" alt="" />
                  </a>
                </li>
                <li ref={iconRef2}>
                  <a href="#">
                    <img src="./xamcon2.png" alt="" />
                  </a>
                </li>
                <li ref={iconRef3}>
                  <a href="#">
                    <img src="./xamcon3.png" alt="" />
                  </a>
                </li>
                <li ref={iconRef4}>
                  <a href="#">
                    <img src="./xamcon4.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="xamcon2" ref={imageRef}>
              <img src="./xam-big.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xamid1;
