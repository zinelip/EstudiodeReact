import { useState, useEffect, useCallback } from "react";
import "./StartScreen.css"; // Este archivo lo crearás a continuación

export default function StartScreen({ onConfirm }) {
  const [isBlinking, setIsBlinking] = useState(false);

  const triggerBlink = useCallback(() => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
      if (onConfirm) onConfirm();
    }, 1500);
  }, [onConfirm]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        triggerBlink();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerBlink]);

  return (
    <div className="start-screen">
      <div className="moon"></div>
      <div className="stars">
        <div className="star" style={{ top: "20px", left: "30px" }}></div>
        <div className="star" style={{ top: "60px", left: "200px" }}></div>
        <div className="star" style={{ top: "90px", left: "400px" }}></div>
        <div className="star" style={{ top: "150px", left: "80px" }}></div>
      </div>
      <div className="ground"></div>

      <div className="frame">
        <div className="skulls-row">
          <span className="skull">💀</span>
          <span className="skull">💀</span>
        </div>
        <p className="question">
          Do you really want <br /> to listen to the playlist?
        </p>
        <p
          className={`yes-button ${isBlinking ? "blinking" : ""}`}
          onClick={triggerBlink}
        >
          Yes
        </p>
        <div className="skulls-row">
          <span className="skull">💀</span>
          <span className="skull">💀</span>
        </div>
      </div>
    </div>
  );
}
