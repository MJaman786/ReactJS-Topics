import { useState } from "react";

const MyBtn = () => {
    const [islike, setState] = useState(false);
    const handelLike = () => {
        if (islike) {
            setState(false)
        } else {
            setState(true);
        }
    }
    return (
        <>
            <div className="container-fluid">
                <h1>This is Like button</h1>
                <button className="btn btn-success d-block mx-auto" onClick={handelLike}>{islike ? `❤️ Liked` : "🤍 Liked"}</button>
            </div>
        </>
    );
}

export default MyBtn;