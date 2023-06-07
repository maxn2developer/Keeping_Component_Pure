export default function Clock({ time }) {
  let hours = time.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "day";
  } else {
    className = "night";
  }
  return (
    <h1
      className={className}
      style={{
        with: "100%",
        height: "150px",
        fontWeight: "200px",
        fontFamily: "fantasy",
        backgroundColor: "yellow",
        alignContent: "center"
      }}
    >
      {time.toLocaleTimeString()}
    </h1>
  );
}
