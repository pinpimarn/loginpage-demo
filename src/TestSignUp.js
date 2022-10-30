import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
// import {Alert} from "react-bootstrap"
import { Form, Button, Card, Alert } from "react-bootstrap"
import LogoPic from "./pics/app_logo.png";
import Dots from "./pics/dots.png";
import Curve from "./pics/curve.png";
import { Link, useNavigate } from "react-router-dom"
import "./styles.css";
import { useAuth } from "./contexts/AuthContext"


function SignUp() {
  // React States
    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    // const [error, setError] = useState("")
    // const [loading, setLoading] = useState(false)
    // const history = useNavigate()
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


  // User Login info
    const database = [
    {
        username: "user1",
        password: "pass1"
    },
    {
        username: "user2",
        password: "pass2"
    }
];

const errors = {
    uname: "invalid username",
    pass: "invalid password"
};

const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
        if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
    } else {
        setIsSubmitted(true);
    }
    } else {
      // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
    }
};

  // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );


    const renderForm = (
    <div className="form">
    <form onSubmit={handleSubmit}>
        {/* <div className="input-container">
            <label>USERNAME : </label>
            <input type="text" name="uname" placeholder="Type your username" required />
            {renderErrorMessage("uname")}
        </div> */}
        <div className="input-container">
            <label>EMAIL : </label>
            <input type="email" ref={emailRef} placeholder="Type your email" required />
            {/* {renderErrorMessage("email")} */}
        </div>
        <div className="input-container">
            <label>PASSWORD : </label>
            <input type="password" ref={passwordRef} placeholder="Type your password" required />
            {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="input-container">
            <label>PASSWORD : </label>
            <input type="password" ref={passwordConfirmRef} placeholder="Type your password again" required />
            {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
            {/* <input type="submit" /> */}
            <button disabled={loading} className="w-100" type="submit">
            Submit
            </button>
        </div>
        <div className="w-100 text-center mt-2">
        Already have an account? <link to="/login">Log In</link>
    </div>
    </form>
    </div>
);

return (
    <div className="app">
        <div className="login-topper-form"></div>
        <div className="login-form">
        {/* <img src={Curve} className="curve-component" height = "300px"/> */}
        {/* <a href="http://localhost:3000/login">
            <img src={LogoPic} className="App-logo" height = "300px"/>
        </a>
        <img src={Dots} className="dot-component" height = "90px"/> */}
            <span className="title"> SIGN UP </span>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    </div>
);
}

export default SignUp