import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

const Registration = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
  };

  let newUserHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3000/addUser",
        {
          firstName: event.target[0].value,
          lastName: event.target[1].value,
          handicap: event.target[2].value,
          email: event.target[3].value,
          username: event.target[4].value,
          password: event.target[5].value,
        },
        config
      )
      .then((response) => {
        console.log(response, "success");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <div className=" registration-container container ">
      <h1 className="signUp-title">Sign Up</h1>
      <form onSubmit={newUserHandler} className="signUp-form-container row">
        <div className="signUp-name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="signUp-handicap">
          <input type="number" placeholder="Handicap" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
        <div>Already have an account?</div>
        <Link to="/">Click Here</Link>
      </form>
    </div>
  );
};

export default Registration;
