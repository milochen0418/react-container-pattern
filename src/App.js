import React from "react";
import CounterContainer from "./CounterContainer";
import { render } from "react-dom"; //Only just import react-dom.render() function

const App = () => {
  return (
    <div>
      <CounterContainer />
      <h1 id="something-important">Adopt Me!</h1>
    </div>
  );
};
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(React.createElement(App), document.getElementById("root"));
