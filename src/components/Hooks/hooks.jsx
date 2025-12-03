import UseContext from "./useContext/useContext";
import UseEffect from "./useEffect/useEffect";
import UseMemo from "./useMemo/useMemo";
import CountingApp from "./useReducer/Counting";
import ReducerHook from "./useReducer/MyReducer";
import UseReducer from "./useReducer/useReducer";
import UseRefHook from "./useRef/UseRefHook";
import CounterApp from "./useState/counterApp/couterComponent";
import UseSateHook from "./useState/usestate";

const Hooks = () => {
    return (
        <>
            {/* <UseSateHook/> */}
            {/* <UseEffect/> */}
            {/* <UseContext/> */}
            {/* <UseReducer/> */}
            {/* <ReducerHook /> */}
            {/* <UseRefHook/> */}
            {/* <CountingApp/> */}
            <UseMemo/>
        </>
    )
}

export default Hooks;