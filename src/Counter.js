import React from "react";

const Counter = ({ count, onIncrement }) => {
  return (
    <section>
      <h1>Counter:{count}</h1>
      <button onClick={onIncrement}>Increment</button>
    </section>
  );
};
export default Counter;
