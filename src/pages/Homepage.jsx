import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Xamid1 from "../components/Xamid1/Xamid1";
import Xamid2 from "../components/Xamid2/Xamid2";
import Xamid3 from "../components/Xamid3/Xamid3";
import Xamid4 from "../components/Xamid4/Xamid4";
import Xamid5 from "../components/Xamid5/Xamid5";
import Xamid6 from "../components/Xamid6/Xamid6";
import "./Xamid2Animation.css";

const Homepage = ({ xamid1Ref, xamid2Ref, xamid5Ref }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [dotSize, setDotSize] = useState(8);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [isPointerOverDot, setIsPointerOverDot] = useState(false);
  const [isOverXamidDark, setIsOverXamidDark] = useState(false);
  const [isXamid2Visible, setIsXamid2Visible] = useState(false);

  const xamid3Ref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(4, 1.001 - Math.pow(1.89, -7 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }));
    }, 2);
    return () => clearInterval(interval);
  }, [mousePosition]);

  const handleMouseDown = () => setIsMousePressed(true);
  const handleMouseUp = () => {
    setIsMousePressed(false);
    setDotSize(8);
  };

  useEffect(() => {
    let interval;
    if (isMousePressed) {
      interval = setInterval(() => {
        setDotSize((prevSize) => prevSize + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isMousePressed]);

  useEffect(() => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - dotPosition.x, 2) +
      Math.pow(mousePosition.y - dotPosition.y, 2)
    );
    setIsPointerOverDot(distance <= dotSize);
  }, [mousePosition, dotPosition, dotSize]);

  useEffect(() => {
    setDotSize(isPointerOverDot ? 24 : 8);
  }, [isPointerOverDot]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsXamid2Visible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (xamid2Ref.current) observer.observe(xamid2Ref.current);
    return () => {
      if (xamid2Ref.current) observer.unobserve(xamid2Ref.current);
    };
  }, [xamid2Ref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        setIsOverXamidDark(visible);
      },
      { threshold: 0.2 }
    );

    if (xamid3Ref.current) observer.observe(xamid3Ref.current);
    if (xamid5Ref.current) observer.observe(xamid5Ref.current);

    return () => {
      if (xamid3Ref.current) observer.unobserve(xamid3Ref.current);
      if (xamid5Ref.current) observer.unobserve(xamid5Ref.current);
    };
  }, [xamid5Ref]);

  return (
    <>
      <div ref={xamid1Ref} id="xamid1">
        <Xamid1 />
      </div>

      <div
        ref={xamid2Ref}
        className={`xamid2-wrapper-animated ${isXamid2Visible ? "show" : ""}`}
      >
        <Xamid2 />
      </div>

      <div ref={xamid3Ref} id="xamid3">
        <Xamid3 />
      </div>

      <div id="xamid4">
        <Xamid4 />
      </div>

      <div ref={xamid5Ref} id="xamid5">
        <Xamid5 />
      </div>

        <Xamid6 />


      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          position: "fixed",
          top: dotPosition.y,
          left: dotPosition.x,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: isOverXamidDark ? "white" : "black",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          cursor: "none",
          transition: "background-color 0.2s ease, width 0.2s, height 0.2s",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          cursor: isPointerOverDot ? "none" : "default",
        }}
      />
    </>
  );
};

export default Homepage;
