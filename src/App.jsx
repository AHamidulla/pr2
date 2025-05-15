  import { useRef, useState, useEffect } from "react";
  import { Routes, Route } from "react-router-dom";
  import Homepage from "./pages/Homepage";
  import Secendpage from "./pages/Secendpage";
  import "./App.css";

  function App() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const xamid1Ref = useRef(null);
    const xamid2Ref = useRef(null);
    const xamid3Ref = useRef(null);
    const xamid4Ref = useRef(null);
    const xamid5Ref = useRef(null);

    const toggleMusic = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.5;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Ошибка воспроизведения аудио:", err);
        });
      }
    };

    const scrollToRef = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Функция для отслеживания скролла
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const aboutMeTop = xamid1Ref.current?.offsetTop || 0;
      const skillsTop = xamid2Ref.current?.offsetTop || 0;
      const projectTop = xamid5Ref.current?.offsetTop || 0;

      // Изменяем стиль меню в зависимости от скролла
      if (currentScroll >= projectTop) {
        setIsDark(true); // Черный фон, белый текст
      } else if (currentScroll >= skillsTop) {
        setIsDark(false); // Белый фон, черный текст
      } else if (currentScroll >= aboutMeTop) {
        setIsDark(true); // Черный фон, белый текст
      } else {
        setIsDark(false); // Белый фон, черный текст
      }
    };

    // Используем useEffect для добавления обработчика скролла
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <>
        <audio ref={audioRef} loop>
          <source src="./fon.mp4" type="audio/mp4" />
        </audio>

        <div className={`xam-navmenu ${isDark ? "dark" : ""}`}>
          <ul className="xamul1">
            <img src="./xam1.svg" alt="Logo" />
            <h1>XAMID</h1>
          </ul>
          <ul className="xamul2">
            <li><h1 onClick={() => scrollToRef(xamid1Ref)}>About Me</h1></li>
            <li><h1 onClick={() => scrollToRef(xamid2Ref)}>Skills</h1></li>
            <li><h1 onClick={() => scrollToRef(xamid5Ref)}>Project</h1></li>
            <li><h1>Contact me</h1></li>
          </ul>
          <ul className="xamul3">
            <button className={`audio-toggle-btn ${isPlaying ? "playing" : ""}`} onClick={toggleMusic}>
              <div className="equalizer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={
            <Homepage
              xamid1Ref={xamid1Ref}
              xamid2Ref={xamid2Ref}
              xamid3Ref={xamid3Ref}
              xamid4Ref={xamid4Ref}
              xamid5Ref={xamid5Ref}
            />
          } />
          <Route path="/second" element={<Secendpage />} />
        </Routes>
      </>
    );
  }

  export default App;
