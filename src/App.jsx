import "./App.css";
import Clock from "./components/Clock/Clock";
import { useWakeLock } from "./hooks/useWakeLock";

function App() {
  useWakeLock();

  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
