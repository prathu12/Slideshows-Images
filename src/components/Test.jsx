// import { text } from "body-parser";
import React, { useState } from "react";

const Test = () => {
  let [count, setCount] = useState(1);
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    setLightMode(!lightMode);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    } else {
      alert("Counter is already 0");
    }
  };

  return (
    <div className= {`mx-5 px-5 d-flex justify-content-center align-items-center vh-100 ${lightMode? '' : 'bg-dark'}`}>
      <button
        className={`btn ${
          lightMode ? "btn-dark" : "btn-light"
        } position-absolute top-0 end-0 m-3`}
        onClick={toggleMode}
      >{`${lightMode ? "🌙Dark Mode" : " ☀️LightMode"}`}</button>

      <button
        className={`btn ${
          lightMode ? "btn-dark" : "btn-light"
        } fs-1 mx-5 px-5 `}
        onClick={() => decreaseCount()}
      >
        -
      </button>
      <div className={`${lightMode ? "text-dark" : "text-light"}`}>{count}</div>
      <button
        className={`btn ${lightMode ? "btn-dark" : "btn-light"} fs-1 mx-5 px-5`}
        onClick={() => increaseCount()}
      >
        +
      </button>
    </div>
  );
};

export default Test;
