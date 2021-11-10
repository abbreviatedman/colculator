const WideKey = (props) => {
  return (
    <button style={style} onClick={() => props.afterClick(props.symbol)}>
      {props.symbol}
    </button>
  );
};

const style = {
  border: "1px solid black",
  gridColumn: "1 / span 2",
};

export default WideKey;