import { useMemo, useState } from "react"

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [memo, setMemo] = useState(0);

    const expensive = (num)=>{
        for (let i = 0; i < 200000000; i++) {
            // heavy logic
        }
        return num * 2;
    }

    const memoValue = useMemo(()=> expensive(count), [count]);

    return (
        <div
            className="
                conatiner mx-auto d-flex flex-column align-items-center 
                justify-content-center
            "
        >
            <div
                className="memo-value w-50 h-50 text-center p-3 m-2 rounded"
                style={{width:"100px", height:"100px", border:"1px solid black"}}
            >
                Heavy Calculation Compoennet {memoValue}
            </div>
            <div
                onClick={()=>setCount(count + 1)}
                className="btn btn-primary m-3"
            >
                Click the Button <span>{count}</span>
            </div>
        </div>
    )
}