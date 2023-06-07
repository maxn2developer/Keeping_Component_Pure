import Profile from "./Profile.js";
import { Link } from "react-router-dom";
export default function AppCorrect() {
  return (
    <>
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
