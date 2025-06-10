import "./App.css";
import Clock from "./components/Clock/Clock";
import { useSettings } from "./contexts/SettingsContext";
import { useWakeLock } from "./hooks/useWakeLock";
import { useFullscreen } from "./hooks/useFullscreen";
import { useState } from "react";
import SettingsModal from "./components/SettingsModal/SettingsModal";

function App() {
  useWakeLock();
  const { settings } = useSettings();
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const [isHovering, setIsHovering] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div
      className="app-container"
      style={{ backgroundColor: settings.app.backgroundColor }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`app-header ${!isHovering ? "hidden" : ""}`}>
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
