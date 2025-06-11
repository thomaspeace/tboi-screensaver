import { useSettings } from "../../contexts/SettingsContext";
import "./SettingsModal.css";

export default function SettingsModal({ isOpen, onClose }) {
  const {
    settings,
    updateAppSettings,
    updateClockSettings,
    updateTimeSettings,
    updateDateSettings,
    resetSettings,
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

  const handleReset = () => {
    if (
      window.confirm("Are you sure you want to reset all settings to default?")
    ) {
      resetSettings();
    }
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
            >
              <option value="HH:mm:ss">14:05:12</option>
              <option value="HH:mm">14:05</option>
              <option value="h:mm:ss a">2:05:12 PM</option>
              <option value="h:mm a">2:05 PM</option>
            </select>
          </div>
          <div className="setting-group">
            <label htmlFor="dateFormat">Date Format</label>
            <select
              id="dateFormat"
              value={settings.date.dateFormat}
              onChange={handleDateFormatChange}
            >
              <option value="do MMMM yyyy">30th June 2025</option>
              <option value="EEEE, do MMMM yyyy">Monday, 30th June 2025</option>
              <option value="EEE, do MMM yyyy">Mon, 30th Jun 2025</option>
              <option value="dd/MM/yyyy">30/06/2025</option>
              <option value="MM/dd/yyyy">06/30/2025</option>
              <option value="yyyy-MM-dd">2025-06-30</option>
              <option value="do MMM yyyy">30th Jun 2025</option>
              <option value="EEEE, d MMM yyyy">Monday, 30 Jun 2025</option>
              <option value="EEEE d MMMM">Monday 30 June</option>
              <option value="do 'of' MMMM yyyy">30th of June 2025</option>
              <option value="d.M.yyyy">30.6.2025</option>
              <option value="MMM do, yyyy">Jun 30th, 2025</option>
              <option value="MMMM do yyyy">June 30th 2025</option>
              <option value="EEEE, MMMM do">Monday, June 30th</option>
              <option value="do MMMM">30th June</option>
            </select>
          </div>
          <div className="setting-group reset-group">
            <button className="reset-button" onClick={handleReset}>
              Reset to Default Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
