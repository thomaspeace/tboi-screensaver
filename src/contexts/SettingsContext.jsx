import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    app: {
      backgroundColor: "rgb(74, 74, 74)",
      // more settings for app
    },
    clock: {
      showStreak: false,
    },
    time: {
      timeFormat: "HH:mm:ss",
    },
    date: {
      dateFormat: "do MMMM yyyy",
    },
  });

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
