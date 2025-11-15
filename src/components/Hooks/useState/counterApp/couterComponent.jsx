import { useState } from "react";
import '../counterApp/style.css'

const CounterApp = ()=>{
    const [counter, setCount] = useState(0);
    const addCount = ()=>{
        setCount(counter + 1);
    }
    const desCount = ()=>{
        if (counter <= 0) {
            alert('Number Cannot Reduce further')
        }else{
            setCount(counter - 1);
        }
    }
    return(
        <>
            <div className="container">
                <div className="data-wrapper">
                    <h1>Value of count: {counter}</h1>
                </div>
                <div className="btn-wrapper">
                    <button className="btn add-btn" onClick={()=>addCount()}>Increment</button>
                    <button className="btn des-btn" onClick={()=>desCount()}>Decrement</button>
                </div>
            </div>
        </>
    );
}

export default CounterApp;