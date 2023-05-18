import React, { useState } from "react";

export default function Login(props) {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const login = (event) => {
        event.preventDefault();
        if (Username === '' || Password === '') {
            setError(true);
        }
        else {
            console.log(Username, Password);
            setError(false);
        }
        setPassword("");
        setUsername("");
    }
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h2>Please enter all the fields</h2>
            </div>
        );
    };
    return (
        <>
            <form >
                <div className="box">
                    <div className="login">
                        Sign In
                    </div>
                    <div className="message">
                        {errorMessage()}
                    </div>
                    <div className="username">
                        <input className="Username" type="text" placeholder="Username" value={Username} required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="password">
                        <input className="Password" type="password" placeholder="Password" value={Password} required onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="loginbtn">
                        <button className="but" onClick={login} >SIGN IN</button>
                    </div>
                </div>
            </form>
        </>
    )
}
