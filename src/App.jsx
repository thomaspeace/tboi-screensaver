import "./App.css";
import Clock from "./components/Clock/Clock";
import { useSettings } from "./contexts/SettingsContext";
import { useWakeLock } from "./hooks/useWakeLock";

function App() {
  useWakeLock();
  const { settings } = useSettings();

  return (
    <div
      className="app-container"
      style={{ backgroundColor: settings.app.backgroundColor }}
    >
      <div className="app-header">
        <button className="header-button">Fullscreen</button>
        <button className="header-button">Settings</button>
      </div>
      <Clock />
    </div>
  );
}

export default App;
