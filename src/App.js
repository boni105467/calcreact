import "./style.css";
import DigitDigitButton from "./DigitDigitButton";
import OperationDigitButton from "./OperationDigitButton";
import { useReducer } from "react";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATON: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">658</div>
        <div className="current-operand">787</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button>%</button>

      <button>x</button>

      <button>+</button>

      <button>-</button>
      <button>.</button>

      <button className="span-two">=</button>
    </div>
  );
}



export default App;
