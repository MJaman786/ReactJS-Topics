import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return (state >= 1) ? state - 1 : 0;

        default:
            return state;
    }
}


function ReducerHook() {

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <>
            <h1>Count: {state}</h1>

            <button onClick={() => dispatch({ type: "INC" })}>
                +
            </button>

            <button onClick={() => dispatch({ type: "DEC" })}>
                -
            </button>
        </>
    )
}

export default ReducerHook