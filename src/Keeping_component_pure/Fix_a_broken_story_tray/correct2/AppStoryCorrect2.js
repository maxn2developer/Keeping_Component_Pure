import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StoryTray from "./StoryTray.js";
import "./styles.css";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" }
];

export default function AppStoryCorrect2() {
  let [stories, setStories] = useState([...initialStories]);
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      className="AppStoryCorrect2"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center"
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

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
