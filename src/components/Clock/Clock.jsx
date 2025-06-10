import TimeDisplay from "./TimeDisplay";
import DateDisplay from "./DateDisplay";
import "./Clock.css";
import streak_effect from "../../assets/svgs/streak_effect.svg";
import { useSettings } from "../../contexts/SettingsContext";

export default function Clock() {
  const { settings } = useSettings();

  return (
    <div className="clock-container">
      {settings.clock.showStreak && (
        <img
          src={streak_effect}
          alt="streak_effect"
          className="streak-effect"
        />
      )}
      <TimeDisplay />
      <DateDisplay />
    </div>
  );
}
