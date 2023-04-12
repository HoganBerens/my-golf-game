import React, { useEffect, useState } from "react";
import "./newScoreDetails.css";
import axios from "axios";
import { useRef } from "react";

const NewScoreDetails = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [hasCourse, setHasCourse] = useState(false);
  const [hasTee, setHasTee] = useState(false);
  const [selectedTees, setSelectedTees] = useState({});
  const [numberOfHoles, setNumberOfHoles] = useState("");

  let wholeCourseDetails = [];

  let sideOfCourseRef = useRef("");

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
  };

  let newScoreDetailsFormSubmitHandler = (event) => {
    event.preventDefault();
    wholeCourseDetails.push(
      selectedCourse.name,
      selectedTees,
      numberOfHoles,
      sideOfCourseRef.current
    );
    sessionStorage.setItem("CourseDetails", JSON.stringify(wholeCourseDetails));
    window.location = "/newScore";
  };

  const selectedCourseHandler = (event) => {
    setSelectedCourse(
      courses.find((newCourse) => newCourse.name === event.target.value)
    );
    setHasCourse(true);
  };

  const selectTeesHandler = (event) => {
    setSelectedTees(
      selectedCourse.tees.find(
        (teesSelected) => teesSelected.color === event.target.value
      )
    );
    setHasTee(true);
  };

  let radioButtonHandler = (event) => {
    setNumberOfHoles(event.target.value);
  };

  let sideOfCourseHandler = (event) => {
    sideOfCourseRef.current = event.target.value;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/courses", config)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <div className="newScoreDetailsContainer container">
      <form
        className="newScoreDetailsForm"
        onSubmit={newScoreDetailsFormSubmitHandler}
      >
        <div className="newScoreDetailsSelectCourse">
          <label>Select a Course</label>
          <select onChange={selectedCourseHandler} name="selectedCourse">
            <option value="" hidden={true}></option>
            {courses.map((course, index) => (
              <option key={index}>{course.name}</option>
            ))}
          </select>
        </div>
        {hasCourse === true ? (
          <div className="newScoreDetailsTeeInfo">
            <label>Select Tees</label>
            <select onChange={selectTeesHandler} name="selectedTees">
              <option value="" hidden={true}></option>
              {selectedCourse.tees.map((tee, index) => (
                <option key={index}>{tee.color}</option>
              ))}
            </select>

            {hasTee === true ? (
              <div className="newScoreDetailsTeeDetails">
                <div className="individualTeeInfo">
                  Par : {selectedTees.par}
                </div>
                <div className="individualTeeInfo">
                  Distance : {selectedTees.distance} yards
                </div>
                <div className="individualTeeInfo">
                  Slope : {selectedTees.slope}
                </div>
                <div className="individualTeeInfo">
                  Rating : {selectedTees.rating}
                </div>
                <div className="numberOfHolesWrapper">
                  <div className="numberOfHolesTitle">
                    How many holes are you playing?
                  </div>
                  <div className="newScoreDetails-radio-button-wrapper">
                    <label>
                      <input
                        type="radio"
                        value="9"
                        name="number-of-holes"
                        onChange={radioButtonHandler}
                      />
                      9
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="18"
                        name="number-of-holes"
                        onChange={radioButtonHandler}
                      />
                      18
                    </label>
                  </div>
                  {numberOfHoles === "9" ? (
                    <div className="sideOfCourseWrapper">
                      <div>Which side are you playing?</div>
                      <div className="sideOfCourseRadioButtons">
                        <label>
                          <input
                            type="radio"
                            name="sideOfCourseBeingPlayed"
                            value="Front"
                            onChange={sideOfCourseHandler}
                          />
                          Front
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="sideOfCourseBeingPlayed"
                            value="Back"
                            onChange={sideOfCourseHandler}
                          />
                          Back
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <button type="submit">Continue</button>
              </div>
            ) : (
              <div>No Tees Selected</div>
            )}
          </div>
        ) : (
          <div>No Course Selected</div>
        )}
      </form>
    </div>
  );
};

export default NewScoreDetails;
