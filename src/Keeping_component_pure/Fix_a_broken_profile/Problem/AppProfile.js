import Profile from "./Profile.js";
import "./Styles.css";
import { Link } from "react-router-dom";
export default function AppProfile() {
  return (
    <>
      <p>
        Two Profile components are rendered side by side with different data.
        Press “Collapse” on the first profile, and then “Expand” it. You’ll
        notice that both profiles now show the same person. This is a bug. Find
        the cause of the bug and fix it.
      </p>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar"
        }}
      />
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson"
        }}
      />
      <Link to="/">Back to Home</Link>
    </>
  );
}
