import React, { useState, useEffect } from "react";

import "./newScoreDetails.css";
import axios from "axios";

const NewScoreDetails = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/courses", config)
      .then((response) => {
        console.log(response, "success");
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
            {[].map(() => (
              <option></option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewScoreDetails;
