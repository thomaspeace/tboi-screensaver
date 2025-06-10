import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Clock.css";
import { useSettings } from "../../contexts/SettingsContext";

export default function DateDisplay() {
  const [date, setDate] = useState(new Date());
  const { settings } = useSettings();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date-element date-outline-text">
      {format(date, settings.date.dateFormat)}
    </div>
  );
}
