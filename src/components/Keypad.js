import Key from "./Key";
import WideKey from "./WideKey";

const Keypad = (props) => {
  const symbols = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const keys = symbols.map((symbol, i) =>
    symbol === "0" ? (
      <WideKey key="zero" symbol="0" afterClick={props.afterClick} />
    ) : (
      <Key key={i} symbol={symbol} afterClick={props.afterClick} />
    )
  );

  return <div style={style}>{keys}</div>;
};

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  margin: "0 auto",
  width: "300px",
  gap: "5px",
};

export default Keypad;
