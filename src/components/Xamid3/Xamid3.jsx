import React, { useEffect } from "react";
import "./Xamid3.css";

const Xamid3 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 1 });
    

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="xamid3" id="xamid3">
      <div className="container">
        <div className="xamid3_wrapper">
          <h1 className="xam3-h1 fade-up">My <a>Experience</a></h1>

          <div className="xam3-cont1 fade-up">
            <ul>
              <li className="fade-up-img">
                <img src="./ic1.png" alt="" />
              </li>
              <li className="fade-up-title">
                <h1> I Studied at the IT Academy</h1>
              </li>
            </ul>
            <p className="fade-up-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              natus sapiente sit eius excepturi quas aut laboriosam porro
              autem placeat odit, ad alias velit! Corporis quae laborum esse
              molestiae provident.
            </p>
          </div>

          <div className="xam3-cont2 fade-up">
            <ul>
              <li className="fade-up-img">
                <img src="./ic2.png" alt="" />
              </li>
              <li className="fade-up-title">
                <h1>I studied on my own through YouTube</h1>
              </li>
            </ul>
            <p className="fade-up-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti nisi architecto, fuga corporis nihil eum repellendus ab
              odio itaque obcaecati saepe totam sit nam accusamus, laboriosam
              nobis alias commodi ut.
            </p>
          </div>

          <div className="xam3-cont1 fade-up">
            <ul>
              <li className="fade-up-img">
                <img src="./ic3.png" alt="" />
              </li>
              <li className="fade-up-title">
                <h1> Worked with people through Google.</h1>
              </li>
            </ul>
            <p className="fade-up-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              accusantium, enim quos inventore illum esse eveniet tenetur.
              Eligendi quo ipsa neque error, delectus rerum maxime nesciunt
              velit modi, sit voluptatum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xamid3;
