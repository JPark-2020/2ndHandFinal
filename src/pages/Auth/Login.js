import React from "react";
import "./Login.css";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    signupHandler,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    usernameError,
  } = props;

  return (
    <div className="login">
      <div className="loginImage">
        <img
          className="landingImage"
          src="assets/images/authpage2.jpeg"
          alt="landingpage image"
        />
      </div>

      <div className="loginContainer">
        <h2 className="loginHeader">Welcome to 2nd Hand</h2>
        <input
          placeholder="Email"
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="loginField"
        />
        <br/>
        <input
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="passwordField"
        />

        <div className="btnContainer">
          {hasAccount ? (
            <div>
              <button className="authButton" onClick={loginHandler}>
                Sign In
              </button>
              <p className="toggleText">
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
              <p className="errorMsg">{emailError}</p>
              <p className="errorMsg">{passwordError}</p>
            </div>
          ) : (
            <div>
              <button className="authButton" onClick={signupHandler}>
                Sign Up
              </button>
              <p className="toggleText">
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
              <p className="errorMsg">{emailError}</p>
              <p className="errorMsg">{passwordError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
