import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function TimeDisplay() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="time">{format(time, "HH:mm:ss")}</div>;
}
