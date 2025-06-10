import { useSettings } from "../../contexts/SettingsContext";
import "./SettingsModal.css";

export default function SettingsModal({ isOpen, onClose }) {
  const { settings, updateAppSettings, updateClockSettings } = useSettings();

  if (!isOpen) return null;

  const handleBackgroundColorChange = (e) => {
    updateAppSettings({ backgroundColor: e.target.value });
  };

  const handleStreakToggle = (e) => {
    updateClockSettings({ showStreak: e.target.checked });
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
        </div>
      </div>
    </div>
  );
}
