import { Component } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      answer: 0,
      previousOperation: "",
      resetting: false,
      error: "",
    };
  }

  formatNumber = (num) =>
    Number(num.replaceAll(",", "")).toLocaleString("en-US");

  process = (symbol) => {
    const { display, answer, previousOperation, resetting } = this.state;
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
          display === "0" ? symbol : this.formatNumber(display + symbol);
        this.setState({ display: newDisplay });
        break;

      case "0":
        if (display !== "0") {
          this.setState({ display: this.formatNumber(display + symbol) });
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
          resetting: false,
        });

        break;

      case "+/-":
        this.setState({
          display: this.formatNumber((-display.replaceAll(",", "")).toString()),
        });
        break;

      case "÷":
        if (!previousOperation) {
          this.setState({
            display: "0",
            answer: Number(display.replaceAll(",", "")),
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
            answer: Number(display.replaceAll(",", "")),
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
            answer: Number(display.replaceAll(",", "")),
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
            answer: Number(display.replaceAll(",", "")),
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
            Number(display.replaceAll(",", "")),
            previousOperation
          );

          this.setState({
            display: this.formatNumber(newAnswer.toString()),
            answer: 0,
            previousOperation: "",
            resetting: true,
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
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Display display={this.state.display} />
        <Keypad afterClick={this.process} />
        <h1 style={style}>{this.state.error}</h1>
      </div>
    );
  }
}

const style = {
  color: "red",
};

export default App;
