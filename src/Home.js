import React, { useState } from "react";
import ReactDOM from "react-dom";
import LogoPic from "./pics/app_logo.png";
import Dots from "./pics/dots.png";
import Curve from "./pics/curve.png";
import "./styles.css";


function App() {
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

  // JSX code for login form
    const renderForm = (
    <div className="form">
    <form onSubmit={handleSubmit}>
    <div className="input-container">
            <label>PASSWORD : </label>
            <input type="password" name="pass" placeholder="Type your password" required />
            {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
            <label>PASSWORD : </label>
            <input type="password" name="pass" placeholder="Type your password again" required />
            {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
            <input type="submit" />
        </div>
    </form>
    </div>
);

return (
    <div className="app">
        <div className="login-topper-form"></div>
        <div className="login-form">
        {/* <img src={Curve} className="curve-component" height = "300px"/> */}
        <a href="http://localhost:3000/login">
            <img src={LogoPic} className="App-logo" height = "300px"/>
        </a>
        <img src={Dots} className="dot-component" height = "90px"/>
            <div className="title">RESET PASSWORD </div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            <br></br>
        </div>
    </div>
);
}

export default App;