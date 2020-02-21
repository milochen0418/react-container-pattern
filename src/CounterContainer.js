import React, { Component } from "react";
import Counter from "./Counter";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = () => {
      this.setState(state => ({ count: state.count + 1 }));
    };
    this.decrement = () => {
      this.setState(state => ({ count: state.count - 1 }));
    };
    this.reset = () => {
      this.setState({ count: 0 });
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Counter
          count={count}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onReset={this.reset}
        />
        <Counter
          count={count}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          onReset={this.reset}
        />
      </div>
    );
  }
}

export default CounterContainer;
