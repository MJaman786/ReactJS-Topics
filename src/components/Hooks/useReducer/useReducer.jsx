import { useReducer } from "react";

let initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return (state >=1) ? state - 1 : 0;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state}</h2>
            <button onClick={() => dispatch({ type: "INC" })}>+</button>
            <button onClick={() => dispatch({ type: "DEC" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
}

export default UseReducer;