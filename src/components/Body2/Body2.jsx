import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Body2.css"; // Подключаем CSS-стили

const videos = [
  "public/vv1.mp4",
  "public/vv2.mp4",
  "public/vv3.mp4",
  "public/vv4.mp4",
  "public/vv5.mp4",
  "public/vv6.mp4",
];

export default function ImageOptions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Останавливаем все видео и сбрасываем время
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Запускаем активное видео
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      activeVideo.play();
    }
  }, [activeIndex]);

  // Обработчик клика по кнопке — переходит на страницу /second
  const handleButtonClick = () => {
    navigate("/second");
  };

  return (
    <div className="wrapper">
      <div className="Body2_text">
        <h1 className="my-h1">MY WEBSAYTS</h1>
      </div>

      {/* КНОПКА С АНИМАЦИЕЙ */}

      {/* Блок с видео-опциями */}
      <div className="options">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`option ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              loop
              muted
              playsInline
              className="option-video"
            />
          </div>
        ))}
      </div>
      <div className="blobb" onClick={handleButtonClick}>
        {/* Две копии текста для верхней и нижней части анимации */}
        <button className="blob-btn2">
          What I Do
          <span className="blob-btn__inner2">
            <span className="blob-btn__blobs2">
              <span className="blob-btn__blob2"></span>
              <span className="blob-btn__blob2"></span>
              <span className="blob-btn__blob2"></span>
              <span className="blob-btn__blob2"></span>
            </span>
          </span>
        </button>
      </div>

    </div>
  );
}
