import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  let savedUsername = "hogan";
  let savedPassword = "berens";

  let loginHandler = (event) => {
    event.preventDefault();
    /* if (
      event.target[0].value === savedUsername &&
      event.target[1].value === savedPassword
    ) {
      window.location.href = "/dashboard";
    } else {
      event.target.reset();
    } */
  };

  return (
    <div className=" login-container container vw-100 vh-100 d-flex align-items-center justify-content-center flex-column bg-light ">
      <div className="form-container">
        <h1 className="row text-dark">Welcome</h1>
        <form onSubmit={loginHandler} className="d-flex flex-column">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Enter</button>
          <div>New User?</div>
          <Link to="/signUp">Sign up here</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
