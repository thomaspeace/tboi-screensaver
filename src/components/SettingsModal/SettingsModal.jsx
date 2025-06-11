import { useSettings } from "../../contexts/SettingsContext";
import "./SettingsModal.css";

export default function SettingsModal({ isOpen, onClose }) {
  const {
    settings,
    updateAppSettings,
    updateClockSettings,
    updateTimeSettings,
    updateDateSettings,
  } = useSettings();

  if (!isOpen) return null;

  const handleBackgroundColorChange = (e) => {
    updateAppSettings({ backgroundColor: e.target.value });
  };

  const handleStreakToggle = (e) => {
    updateClockSettings({ showStreak: e.target.checked });
  };

  const handleTimeFormatChange = (e) => {
    updateTimeSettings({ timeFormat: e.target.value });
  };

  const handleDateFormatChange = (e) => {
    updateDateSettings({ dateFormat: e.target.value });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="setting-group">
            <label htmlFor="backgroundColor">Background Colour</label>
            <input
              type="color"
              id="backgroundColor"
              value={settings.app.backgroundColor}
              onChange={handleBackgroundColorChange}
              className="color-picker"
            />
          </div>
          <div className="setting-group">
            <label htmlFor="toggleStreak">Show Streak Effect</label>
            <input
              type="checkbox"
              id="toggleStreak"
              checked={settings.clock.showStreak}
              onChange={handleStreakToggle}
            />
          </div>
          <div className="setting-group">
            <label htmlFor="timeFormat">Time Format</label>
            <select
              id="timeFormat"
              value={settings.time.timeFormat}
              onChange={handleTimeFormatChange}
            ></select>
          </div>
          <div className="setting-group">
            <label htmlFor="dateFormat">Date Format</label>
            <select
              id="dateFormat"
              value={settings.date.dateFormat}
              onChange={handleDateFormatChange}
            ></select>
          </div>
        </div>
      </div>
    </div>
  );
}
