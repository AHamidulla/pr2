import { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Secendpage from "./pages/Secendpage";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const xamid1Ref = useRef(null); // About Me
  const xamid2Ref = useRef(null); // Skills
  const xamid3Ref = useRef(null); // Projects
  const xamid4Ref = useRef(null); // (не используется)
  const xamid5Ref = useRef(null); // Contact

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

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const thirdTop = xamid3Ref.current?.offsetTop || 0;
    const fifthTop = xamid5Ref.current?.offsetTop || 0;

    // Добавляем немного отступа для лучшего срабатывания
    if (
      (scrollY >= thirdTop - 100 && scrollY < fifthTop - 100) ||
      scrollY >= fifthTop - 100
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <li><h1 onClick={() => scrollToRef(xamid3Ref)}>Projects</h1></li>
          <li><h1 onClick={() => scrollToRef(xamid5Ref)}>Contact</h1></li>
        </ul>
        <ul className="xamul3">
          <button className={`audio-toggle-btn ${isPlaying ? "playing" : ""}`} onClick={toggleMusic}>
            <div className="equalizer">
              <span></span><span></span><span></span><span></span>
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
