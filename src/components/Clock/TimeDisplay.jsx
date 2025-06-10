import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Clock.css";
import streak_effect from "../../assets/svgs/streak_effect.svg";

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-element outline-text">{format(time, "HH:mm:ss")}</div>
  );
}
