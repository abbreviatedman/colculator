import { Component } from "react";
import Keypad from "./components/Keypad";
import Display from "./components/Display";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
    };
  }

  updateDisplay = (symbol) => {
    this.setState({ display: this.state.display + symbol });
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state.display} />
        <Keypad afterClick={this.updateDisplay} />
      </div>
    );
  }
}

export default App;
