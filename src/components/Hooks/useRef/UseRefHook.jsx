import { useRef, useState } from "react";

export default function UseRefHook() {

    // Define primary colors for quick reference within the component
    const BACKGROUND_COLOR = '#1e1e1e';
    const FORM_BOX_COLOR = '#252526';
    const INPUT_FIELD_COLOR = '#3c3c3c';
    const TEXT_COLOR = '#ffffff';
    const ACCENT_COLOR = '#007acc';
    const HEADING_COLOR = '#00aaff';

    // this method is against the rule of react
    // const username = document.querySelector('#username');
    // const password = document.querySelector('#password');
    // console.log(username.value, password.value);

    const userName = useRef(null);
    const userPass = useRef(null);

    // No logic, no state, just UI
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName.current.value);
        console.log(userPass.current.value);

    };

    // password toggle logic
    const [isShow, setType] = useState(false);
    const handelToggle = ()=>{
        if (isShow) {
            setType(false)
        }else{
            setType(true)
        }
    }
    
    return (
        <div style={{
            width: "100%", display: 'flex', justifyContent: 'center',
            alignItems: 'center', minHeight: '100vh',
            backgroundColor: BACKGROUND_COLOR, color: TEXT_COLOR, fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                padding: '40px',
                backgroundColor: FORM_BOX_COLOR, borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                width: '90%', maxWidth: '600px'
            }}>
                <h2
                    style={{
                        marginBottom: '20px',
                        textAlign: 'center',
                        color: HEADING_COLOR, // Accent color for heading
                    }}
                >
                    User Login
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="username"
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                            }}
                        >
                            Username
                        </label>
                        <input
                            ref={userName}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            autoComplete="off"
                            style={{
                                width: '100%', padding: '10px', border: '1px solid #444', borderRadius: '4px',
                                backgroundColor: INPUT_FIELD_COLOR, color: TEXT_COLOR, boxSizing: 'border-box',
                            }}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div style={{ marginBottom: '30px', position:"relative"}}>
                        <label
                            htmlFor="password"
                            style={{
                                display: 'block',
                                marginBottom: '8px',
                                fontWeight: 'bold',
                            }}
                        >
                            Password
                        </label>

                        {/* icon */}
                        <div className="pass-icon"
                            onClick={handelToggle}
                            style={{
                                position: "absolute", top:"45px", right:"10px", fontSize:"20px", cursor:"pointer"
                            }}>
                                <i className={`fi ${isShow ? `fi-rr-eye`: `fi-rr-eye-crossed`}`}></i>
                        </div>
                        
                        <input
                            ref={userPass}
                            type={isShow ? `text` : `password`}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #444',
                                borderRadius: '4px',
                                backgroundColor: INPUT_FIELD_COLOR, // Dark input field
                                color: TEXT_COLOR,
                                boxSizing: 'border-box',
                            }}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        style={{
                            width: '100%', padding: '12px', backgroundColor: ACCENT_COLOR, color: 'white',
                            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold',
                        }}>
                        Submit Securely
                    </button>
                </form>
            </div>
        </div>
    );
}