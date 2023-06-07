const guest = 1;
// const guest = guest + 1;

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function App2() {
  return (
    <>
      <Cup guest={guest} />
      <Cup guest={guest + 1} />
      <Cup guest={guest + 2} />
    </>
  );
}
