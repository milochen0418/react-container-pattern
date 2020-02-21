import React, { Component } from "react";
import Counter from "./Counter";

export default class CounterContainer extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

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
