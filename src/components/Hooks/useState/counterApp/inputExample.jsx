import { useState } from "react";

const InputExample = () => {
    const [data, setData] = useState({
        username: '',
        email: ''
    });

    const handelchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">

                {/* Main Card */}
                <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "16px" }}>

                    <h3 className="text-center mb-4 fw-bold text-primary">Enter Your Name</h3>

                    {/* Input */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Name</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control form-control-lg"
                            placeholder="Type something..."
                            onChange={handelchange}
                            style={{
                                borderRadius: "10px",
                                padding: "12px 16px",
                                fontSize: "16px"
                            }}
                        />
                    </div>
                    {/* Input */}
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Email</label>
                        <input
                            type='email'
                            className="form-control form-control-lg"
                            placeholder="Type something..."
                            name="email"
                            onChange={handelchange}
                            style={{
                                borderRadius: "10px",
                                padding: "12px 16px",
                                fontSize: "16px"
                            }}
                        />
                    </div>

                    {/* Output Box */}
                    <div
                        className="p-3 mt-3 border rounded bg-white text-center shadow-sm"
                        style={{
                            minHeight: "60px",
                            borderRadius: "10px"
                        }}
                    >
                        <p className="m-0 fs-5 fw-semibold text-secondary">
                            {data.username ? `Your Name: ${data.username}` : "Username is empty"}
                        </p>

                        <p className="m-0 fs-5 fw-semibold text-secondary">
                            {data.email ? `Your Email: ${data.email}` : "Email is empty"}
                        </p>

                    </div>

                </div>
            </div>
        </>
    );
};

export default InputExample;
