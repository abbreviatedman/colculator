import { Component } from "react";

class Key extends Component {
  constructor() {
    super();
    this.state = {
      clicking: false,
    };
  }

  mouseDownHandler = () => {
    this.setState({ clicking: true });
  };

  mouseUpHandler = () => {
    this.setState({ clicking: false });
    this.props.afterClick(this.props.symbol);
  };

  render() {
    return (
      <button
        style={{
          ...styles.key,
          ...(this.state.clicking && styles.keyClicking),
          ...(this.props.wide && styles.wideKey),
        }}
        onMouseUp={this.mouseUpHandler}
        onMouseDown={this.mouseDownHandler}
      >
        {this.props.symbol}
      </button>
    );
  }
}

const styles = {
  key: {
    border: "1px solid black",
    borderRadius: "5px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    fontSize: "3em",
  },

  wideKey: {
    gridColumn: "1 / span 2",
  },

  keyClicking: {
    boxShadow: "none",
  },
};

export default Key;
