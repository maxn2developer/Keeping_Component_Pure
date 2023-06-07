import { Link } from "react-router-dom";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function LocalMutation() {
  let cups = [];
  for (let i = 1; i <= 112; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <h2 style={{ backgroundColor: "orange" }}>
        Local mutation: Your component’s little secret{" "}
      </h2>
      <p>
        Local mutation: Your component’s little secret In the above example, the
        problem was that the component changed a preexisting variable while
        rendering. This is often called a “mutation” to make it sound a bit
        scarier. Pure functions don’t mutate variables outside of the function’s
        scope or objects that were created before the call—that makes them
        impure! However, it’s completely fine to change variables and objects
        that you’ve just created while rendering. In this example, you create an
        [] array, assign it to a cups variable, and then push a any number cups
        into it:
      </p>
      {cups}
      <Link to="/">Back to Home</Link>
    </>
  );
}

// or if not jsx.
// export default function LocalMutation() {
//   let cups = [];
//   for (let i = 1; i <= 112; i++) {
//     cups.push(<Cup key={i} guest={i} />);
//   }
//   return cups;
// }
