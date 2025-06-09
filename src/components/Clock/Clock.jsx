import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";
import "./Clock.css";

export default function Clock() {
  return (
    <div className="clock-container">
      <TimeDisplay />
      <DateDisplay />
    </div>
  );
}
