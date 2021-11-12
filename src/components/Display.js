const Display = (props) => {
  return (
    <div>
      <h1 style={style}>{props.display}</h1>
    </div>
  );
};

const style = {
  fontSize: "4.5em",
  background: "black",
  color: "white",
  width: "600px",
  margin: "20px auto 2px",
  textAlign: "center",
};

export default Display;
