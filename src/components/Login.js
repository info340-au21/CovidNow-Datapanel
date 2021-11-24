import React from "react";
import "../login.css";

export function Login() {
  return (
    <div className="container">
      <LeftFlex />
      <RightFlex />
    </div>
  );
}

const LoginForm = () => {
  return (
    <form>
      <div className="login-form">
        <label for="emailOrUser">Email address or username</label>
        <input
          type="email"
          className="form-control"
          id="emailOrUser"
          aria-describedby="emailHelp"
          placeholder="Enter your email address or username"
        ></input>
        <label for="password">Password</label>
        <input
          type="email"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          placeholder="Password"
        ></input>
        <button type="button" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

const LeftFlex = () => {
  return (
    <div className="flex-item login-column">
      <h4>WELCOME BACK</h4>
      <h2>Log into your account</h2>
      <LoginForm />
    </div>
  );
};

const RightFlex = () => {
  return (
    <div className="flex-item flex-panel">
      <h2>Access the all the COVID data you ever need</h2>
      <h1>All in ONE place.</h1>
    </div>
  );
};
