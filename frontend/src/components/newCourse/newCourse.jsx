import React, { useRef } from "react";
import "./newCourse.css";

const NewCourse = () => {
  let colorRef = useRef("");
  let parRef = useRef("");
  let distanceRef = useRef("");
  let slopeRef = useRef("");
  let ratingRef = useRef("");

  let allTees = [];

  let newTeesHandler = (event) => {
    event.preventDefault();
    let tee = {
      color: colorRef.current.value,
      par: parRef.current.value,
      distance: distanceRef.current.value,
      slope: slopeRef.current.value,
      rating: ratingRef.current.value,
    };
    allTees.push(tee);

    colorRef.current.value = "";
    parRef.current.value = "";
    distanceRef.current.value = "";
    slopeRef.current.value = "";
    ratingRef.current.value = "";
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
  };

  let courseSubmitHandler = (event) => {
    event.preventDefault();
    if (colorRef.current.value) {
      let tee = {
        color: colorRef.current.value,
        par: parRef.current.value,
        distance: distanceRef.current.value,
        slope: slopeRef.current.value,
        rating: ratingRef.current.value,
      };
      allTees.push(tee);
    }
    axios
      .post(
        "http://localhost:3000/addCourse",
        {
          name: event.target[0].value,
          tees: allTees,
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
    <div className="new-course-container container   ">
      <form onSubmit={courseSubmitHandler} className="new-course-form">
        <input type="text" placeholder="Course Name" />
        <input
          id="tee-color"
          type="text"
          placeholder="Tees Color"
          ref={colorRef}
        />
        <input id="tee-par" type="text" placeholder="Tees par" ref={parRef} />
        <input
          id="tee-distance"
          type="text"
          placeholder="Tees Distance"
          ref={distanceRef}
        />
        <input id="tee-slope" type="text" placeholder="Slope" ref={slopeRef} />
        <input
          id="tee-rating"
          type="text"
          placeholder="Rating"
          ref={ratingRef}
        />
        <button className="newTeesButton" onClick={newTeesHandler}>
          Add New Tees
        </button>
        <button className="SubmitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
