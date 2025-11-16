import { useEffect, useState } from "react";

const Window = () => {
    const [screen, setScreenSize] = useState(window.innerWidth);
    const handelResize = ()=>{
        setScreenSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handelResize);
        return ()=> window.removeEventListener('resize', handelResize);
    },[])
    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center" 
                style={{ minHeight: "200px", backgroundColor: "crimson" }}
            >
                <h1>This is Screen Resolution: <span style={{color:"yellow"}}>{screen}</span></h1>
            </div>
        </>
    )
}

export default Window;