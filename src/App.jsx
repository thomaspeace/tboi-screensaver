import "./App.css";
import Clock from "./components/Clock/Clock";
import { useSettings } from "./contexts/SettingsContext";
import { useWakeLock } from "./hooks/useWakeLock";
import { useFullscreen } from "./hooks/useFullscreen";
import { useState, useEffect } from "react";
import SettingsModal from "./components/SettingsModal/SettingsModal";

function App() {
  useWakeLock();
  const { settings } = useSettings();
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    let inactivityTimer;

    const handleMouseMove = () => {
      setIsMouseMoving(true);
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setIsMouseMoving(false);
      }, 3000); // 3 seconds of mouse inactivity
    };

    // initial setup
    handleMouseMove();

    window.addEventListener("mousemove", handleMouseMove);

    // clean up fn
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <div
      className="app-container"
      style={{ backgroundColor: settings.app.backgroundColor }}
    >
      <div className={`app-header ${!isMouseMoving ? "hidden" : ""}`}>
        <button className="header-button" onClick={toggleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button
          className="header-button"
          onClick={() => setIsSettingsOpen(true)}
        >
          Settings
        </button>
      </div>
      <Clock />
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
