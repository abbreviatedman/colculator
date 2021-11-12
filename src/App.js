import { Component } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      answer: 0,
      previousOperation: "",
      error: "",
    };
  }

  convertToNumber = (str) => Number(str.replaceAll(",", ""));

  convertToString = (num) => num.toLocaleString("en-US");

  formatDisplay = (str) =>
    Number(str.replaceAll(",", "")).toLocaleString("en-US");

  process = (symbol) => {
    const { display, answer, previousOperation } = this.state;
    switch (symbol) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        const newDisplay =
          display === "0" ? symbol : this.formatDisplay(display + symbol);
        this.setState({ display: newDisplay });
        break;

      case "0":
        if (display !== "0") {
          this.setState({ display: this.formatDisplay(display + symbol) });
        }

        break;

      case ".":
        if (!display.includes(".")) {
          this.setState({ display: display + symbol });
        }

        break;

      case "AC":
        this.setState({
          display: "0",
          answer: 0,
          previousOperation: "",
        });

        break;

      case "+/-":
        {
          const number = this.convertToNumber(display);
          const newDisplay = this.convertToString(-number);
          this.setState({ display: newDisplay });
        }

        break;

      case "÷":
        if (!previousOperation) {
          this.setState({
            display: "0",
            answer: this.convertToNumber(display),
            previousOperation: "÷",
          });
        } else {
          // make answer the combination of display and answer via previousOperation
          // make display the string version of that
          // make resetting true
          // make previousOperation ÷
        }

        break;

      case "x":
        if (!previousOperation) {
          this.setState({
            display: "0",
            answer: this.convertToNumber(display),
            previousOperation: "x",
          });
        } else {
          // make answer the combination of display and answer via previousOperation
          // make display the string version of that
          // make resetting true
          // make previousOperation x
        }

        break;

      case "-":
        if (!previousOperation) {
          this.setState({
            display: "0",
            answer: this.convertToNumber(display),
            previousOperation: "-",
          });
        } else {
          // make answer the combination of display and answer via previousOperation
          // make display the string version of that
          // make resetting true
          // make previousOperation -
        }

        break;

      case "+":
        if (!previousOperation) {
          this.setState({
            display: "0",
            answer: this.convertToNumber(display),
            previousOperation: "+",
          });
        } else {
          // make answer the combination of display and answer via previousOperation
          // make display the string version of that
          // make resetting true
          // make previousOperation +
        }

        break;

      case "=":
        if (previousOperation) {
          const newAnswer = this.processPreviousOperation(
            answer,
            this.convertToNumber(display),
            previousOperation
          );

          this.setState({
            display: this.convertToString(newAnswer),
            answer: 0,
            previousOperation: "",
          });
        }

        break;

      default:
        this.setState({ error: "This feature has not yet been implemented." });
    }
  };

  processPreviousOperation = (x, y, operation) => {
    switch (operation) {
      case "+":
        return x + y;

      case "-":
        return x - y;

      case "÷":
        return x / y;

      case "x":
        return x * y;

      default:
        break;
    }
  };

  render() {
    return (
      <div style={style}>
        <Display display={this.state.display} />
        <Keypad afterClick={this.process} />
        <h1 style={style}>{this.state.error}</h1>
      </div>
    );
  }
}

const style = {
  width: "600px",
  margin: "10px auto 10px",
  padding: "0px 5px",
};

export default App;
