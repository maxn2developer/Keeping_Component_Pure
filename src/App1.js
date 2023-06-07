import { Link } from "react-router-dom";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function App1() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Link to="">Home</Link>
    </>
  );
}
