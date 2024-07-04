import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  const restButton = () => {
    setCounter(0);
  };
  return (
    <React.Fragment>
      <div className="outer-div">
        <div className="container">
          <h1>Counter App (React)</h1>
          <div className="button-row">
            <button onClick={addValue} className="button-color">
              +
            </button>
            <button className="counter-color">{counter}</button>
            <button onClick={subValue} className="button-color">
              -
            </button>
          </div>
          <button onClick={restButton} className="button-color">
            {" "}
            Reset
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
