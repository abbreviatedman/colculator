import Key from "./Key";

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

  const keys = symbols.map((symbol, i) => (
    <Key
      key={symbol}
      symbol={symbol}
      wide={symbol === "0"}
      afterClick={props.afterClick}
    />
  ));

  return <div style={style}>{keys}</div>;
};

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  margin: "0 auto",
  width: "600px",
  height: "600px",
  gap: "5px",
};

export default Keypad;
