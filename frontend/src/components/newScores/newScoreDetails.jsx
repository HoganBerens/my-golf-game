import React, { useEffect, useState } from "react";
import "./newScoreDetails.css";
import axios from "axios";

const NewScoreDetails = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [hasCourse, setHasCourse] = useState(false);
  const [hasTee, setHasTee] = useState(false);
  const [selectedTees, setSelectedTees] = useState({});

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
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
      <form className="newScoreDetailsForm">
        <div>
          <label>Select a Course</label>
          <select onChange={selectedCourseHandler} name="selectedCourse">
            <option value="" hidden={true}></option>
            {courses.map((course, index) => (
              <option key={index}>{course.name}</option>
            ))}
          </select>
        </div>
        {hasCourse === true ? (
          <div>
            <div>
              <label>Select Tees</label>
              <select onChange={selectTeesHandler} name="selectedTees">
                <option value="" hidden={true}></option>
                {selectedCourse.tees.map((tee, index) => (
                  <option key={index}>{tee.color}</option>
                ))}
              </select>
            </div>
            {hasTee === true ? (
              <div>
                <div>Par : {selectedTees.par}</div>
                <div>Distance : {selectedTees.distance} yards</div>
                <div>Slope : {selectedTees.slope}</div>
                <div>Rating : {selectedTees.rating}</div>
              </div>
            ) : (
              <div>No Tees</div>
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
