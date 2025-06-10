import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    app: {
      backgroundColor: "rgb(74, 74, 74)",
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
  });

  const value = {};

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
