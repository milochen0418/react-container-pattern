import React, { Component } from "react";
import Counter from "./Counter";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = () => {
      this.setState(state => ({ count: state.count + 1 }));
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Counter count={count} onIncrement={this.increment} />
        <Counter count={count} onIncrement={this.increment} />
      </div>
    );
  }
}

export default CounterContainer;
