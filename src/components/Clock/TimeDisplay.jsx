import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Clock.css";
import { useSettings } from "../../contexts/SettingsContext";

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date());
  const { settings } = useSettings();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-element time-outline-text">
      {format(time, settings.time.timeFormat)}
    </div>
  );
}
