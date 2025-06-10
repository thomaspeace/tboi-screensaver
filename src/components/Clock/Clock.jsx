import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";
import "./Clock.css";
import streak_effect from "../../assets/svgs/streak_effect.svg";

export default function Clock() {
  return (
    <div className="clock-container">
      <img src={streak_effect} alt="streak_effect" className="streak-effect" />
      <TimeDisplay />
      <DateDisplay />
    </div>
  );
}
