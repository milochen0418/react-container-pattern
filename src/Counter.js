import React from "react";

const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <section>
      <h1>Counter:{count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </section>
  );
};
export default Counter;
