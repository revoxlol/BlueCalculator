import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap is access locally ( no need for it to be in the dependecies)
import { create, all } from "mathjs";
import "./Calculator.css";

const math = create(all);

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(math.evaluate(input));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        {["C", "√", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="].map((key) => (
          <button key={key} onClick={() => handleClick(key)} className="btn btn-primary">
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
