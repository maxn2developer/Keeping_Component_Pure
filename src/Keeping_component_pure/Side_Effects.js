import { Link } from "react-router-dom";

let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function SideEffects() {
  return (
    <>
      <h2>Side Effects: (un)intended consequences</h2>
      <p>
        React’s rendering process must always be pure. Components should only
        return their JSX, and not change any objects or variables that existed
        before rendering—that would make them impure! Here is a component that
        breaks this rule:
      </p>
      <>Re-render change the component,check click on the back home and other</>
      <br />
      <br />
      <Cup />
      <Cup />
      <Cup />

      <Link to="/">Back to Home</Link>
    </>
  );
}
