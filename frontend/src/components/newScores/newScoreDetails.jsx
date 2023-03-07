import React, { useEffect, useState } from "react";
import "./newScoreDetails.css";
import axios from "axios";

const NewScoreDetails = () => {
  const [courses, setCourses] = useState([]);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "application/json",
    },
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
    <div>
      <form>
        <div>
          <label>Select a Course</label>
          <select name="selectedCourse">
            <option value="" hidden={true}></option>
            {courses.map((course, index) => (
              <option key={index}>{course.name}</option>
            ))}
            {console.log(courses)}
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewScoreDetails;
