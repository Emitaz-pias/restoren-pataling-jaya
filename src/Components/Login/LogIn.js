import React from "react";
import "./Login.css";
const LogIn = () => {
  return (
    <main className="fullContainer">
      {/* <img className="loginImage" src={LoginBg} alt="nice foods" /> */}
      <div className="textOverImage">
        <h1
          style={{ fontFamily: "Cormorant Garamond", fontSize: "2.438rem" }}
          className="logInTitle"
        >
          Log <span className="ms-2">in</span>
        </h1>
        <p className="instruction">Enter your email and password</p>
      </div>
    </main>
  );
};

export default LogIn;
