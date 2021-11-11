const Display = (props) => {
  return (
    <div>
      <h1 style={style}>{props.display}</h1>
    </div>
  );
};

const style = {
  fontSize: "4.5em",
};

export default Display;
