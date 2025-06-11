import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  app: {
    backgroundColor: "#4A4A4A",
    // more settings for app
  },
  clock: {
    showStreak: true,
  },
  time: {
    timeFormat: "HH:mm:ss",
  },
  date: {
    dateFormat: "do MMMM yyyy",
  },
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("tboi-screensaver-settings");
    return savedSettings ? JSON.parse(savedSettings) : DEFAULT_SETTINGS;
  });

  useEffect(() => {
    localStorage.setItem("tboi-screensaver-settings", JSON.stringify(settings));
  }, [settings]);

  const updateAppSettings = (newAppSettings) => {
    setSettings((prev) => ({
      ...prev,
      app: { ...prev.app, ...newAppSettings },
    }));
  };

  const updateClockSettings = (newClockSettings) => {
    setSettings((prev) => ({
      ...prev,
      clock: { ...prev.clock, ...newClockSettings },
    }));
  };

  const updateTimeSettings = (newTimeSettings) => {
    setSettings((prev) => ({
      ...prev,
      time: { ...prev.time, ...newTimeSettings },
    }));
  };

  const updateDateSettings = (newDateSettings) => {
    setSettings((prev) => ({
      ...prev,
      date: { ...prev.date, ...newDateSettings },
    }));
  };

  const value = {
    settings,
    updateAppSettings,
    updateClockSettings,
    updateTimeSettings,
    updateDateSettings,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings has to be used with SettingsProvider");
  }
  return context;
}

export { SettingsProvider, useSettings };
