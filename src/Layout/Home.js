import { Link } from "react-router-dom";
import { KeepingComponentsPure } from "./note/KeepingComponentsPure";

export default function Home() {
  return (
    <>
      <h2>Keeping Components Pure</h2>
      <KeepingComponentsPure />
      <Link to="local-mutation">Local Mutation</Link>
      <br />
      <Link to="Every-components/pure-function">
        Every component you write is a pure function
      </Link>
      <br />
      <Link to="side-effects">Side Effects</Link>
      <br />
      <Link to="clock">Clock</Link> <br />
      <Link to="fix-a-broken-profile-problem">
        Fix a broken profile with problem
      </Link>
      <br />
      <Link to="fix-a-broken-profile-correct">
        Fix a broken profile is corrected
      </Link>
      <br />
      <Link to="fix-a-broken-story-tray-problem">Fix a broken story tray</Link>
      <br />
      <Link to=" ">Fix a broken profile is corrected</Link>
      <br />
      <Link to="fix-a-broken-story-correct-1">
        Fix a broken story is corrected one
      </Link>
      <br />
      <Link to="fix-a-broken-story-correct-2">
        Fix a broken story is corrected two
      </Link>
    </>
  );
}
