import React from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  let loginHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/getUserLogin", {
        username: event.target[0].value,
        password: event.target[1].value,
      })
      .then((response) => {
        // login and authenticate
        if (response.data) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          if ((response.data.clubs || []).length === 0) {
            window.location.pathname = "/addClubs";
          } else {
            window.location.pathname = "/dashboard";
          }
        } else {
          alert("Username or Password incorrect");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className=" login-container container  ">
      <h2 className="login-title row ">Log In</h2>
      <form onSubmit={loginHandler} className="form-container row ">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Enter</button>
        <div>New User?</div>
        <Link to="/signUp">Sign up here</Link>
      </form>
    </div>
  );
};

export default LoginPage;
