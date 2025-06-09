import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Clock.css";

export default function DateDisplay() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="date">{format(date, "do MMMM yyyy")}</div>;
}
