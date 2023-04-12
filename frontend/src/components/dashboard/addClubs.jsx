import axios from "axios";
import React from "react";
import "./addClubs.css";

const AddClubs = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  let userClubs = [];

  let availableClubs = [
    "Driver",
    "3 Wood",
    "5 Wood",
    "7 Wood",
    "3 Hybrid",
    "5 Hybrid",
    "7 Hybrid",
    "1 Iron",
    "2 Iron",
    "3 Iron",
    "4 Iron",
    "5 Iron",
    "6 Iron",
    "7 Iron",
    "8 Iron",
    "9 Iron",
    "Pitching Wedge",
    "48 Degree",
    "50 Degree",
    "52 Degree",
    "54 Degree",
    "56 Degree",
    "58 Degree",
    "60 Degree",
    "62 Degree",
    "64 Degree",
    "Putter",
  ];

  let checkboxHandler = (event) => {
    if (event.target.checked === true) {
      userClubs.push(event.target.value);
    } else {
      let index = userClubs.indexOf(event.target.value);
      userClubs.splice(index, 1);
    }
  };

  let formSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/updateUser", {
        username: user.username,
        clubs: userClubs,
      })
      .then((response) => {
        if (response.data) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          window.location = "/dashboard";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="addClubs-wrapper">
      <div className="addClubs-title">
        Select the clubs that you have in your bag
      </div>
      <form className="addClubs-form-wrapper" onSubmit={formSubmitHandler}>
        {availableClubs.map((club, index) => (
          <div key={index} className="addClubs-club-wrapper">
            <input
              className="addClubs-checkbox"
              type="checkbox"
              value={club}
              label={club}
              onChange={checkboxHandler}
            />
            <div className="addClubs-club-title">{club}</div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClubs;
