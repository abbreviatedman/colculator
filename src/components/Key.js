const Key = (props) => {
  return (
    <button style={style} onClick={() => props.afterClick(props.symbol)}>
      {props.symbol}
    </button>
  );
};

const style = {
  border: "1px solid black",
};

export default Key;
