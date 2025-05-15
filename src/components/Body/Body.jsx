import React, { useEffect } from "react";
import "./Body.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Body = () => {
  useEffect(() => {
    let smoother;

    if (ScrollTrigger.isTouch !== 1) {
      smoother = ScrollSmoother.create({
        wrapper: ".body-wrapper",
        content: ".body-content",
        smooth: 1.5,
        effects: true,
      });

      // Анимация исчезновения hero-section
      gsap.fromTo(
        ".hero-section",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Анимации галереи слева
      gsap.utils.toArray(".gallery__left .gallery__item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });

      // Анимации галереи справа
      gsap.utils.toArray(".gallery__right .gallery__item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
    }

    // Очистка ScrollSmoother
    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <section className="body-wrapper">
      <div className="body-content">
        <div className="hero-section" />

        <section className="portfolio">
          <div className="container">
            <div className="my">
              <h1 className="my__h">MY WEBSITES</h1>
            </div>
            <main className="gallery">
              <div data-speed=".9" className="gallery__left">
                <img className="gallery__item" src="/img/work/1.jpg" alt="Alt" />
                <img className="gallery__item" src="/img/work/2.jpg" alt="Alt" />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Creative floating scroll with amazing parallax effect
                  </h2>
                  <p className="text-block__p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
                  </p>
                </div>
                <img className="gallery__item" src="/img/work/6.jpg" alt="Alt" />
              </div>

              <div data-speed="1.1" className="gallery__right">
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Creative floating scroll with amazing parallax effect
                  </h2>
                  <p className="text-block__p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.
                  </p>
                </div>
                <img className="gallery__item" src="/img/work/4.jpg" alt="Alt" />
                <img className="gallery__item" src="/img/work/5.jpg" alt="Alt" />
                <img className="gallery__item" src="/img/work/3.jpg" alt="Alt" />
              </div>
            </main>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Body;
