import { useReducer } from "react"

export default function CountingApp() {

    const initialState = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INC":
                return { ...state, count: count + 1 };

            case "DEC":
                return { ...state, count: count + 1 };

            case "RESET":
                return { ...state, count: count + 1 };
            
            default:
                return state
        }
    }

    // define useReducer
    const [sate, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="mb-0">🔢 Simple Counter App</h4>
                        </div>
                        <div className="card-body text-center">

                            {/* Display Count */}
                            <div className="mb-4">
                                <h1 className="display-1 fw-bold text-dark">{count}</h1>
                            </div>

                            {/* Buttons */}
                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-success btn-lg"
                                    onClick={() => dispatch({ type: "INC" })}
                                >
                                    Increment (+1)
                                </button>
                                <button
                                    className="btn btn-warning btn-lg"
                                    onClick={() => dispatch({ type: "DEC" })}
                                >
                                    Decrement (-1)
                                </button>
                                <button
                                    className="btn btn-danger btn-lg mt-3"
                                    onClick={() => dispatch({ type: "RESET" })}
                                >
                                    Reset (0)
                                </button>
                            </div>

                        </div>
                        <div className="card-footer text-muted text-center">
                            Built with React and Bootstrap 5
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}