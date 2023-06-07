import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock.js";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function AppClock() {
  const time = useTime();
  return (
    <div style={{ display: "block", margin: "auto", textAlign: "center" }}>
      <div style={{}}>
        <Clock time={time} />
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
