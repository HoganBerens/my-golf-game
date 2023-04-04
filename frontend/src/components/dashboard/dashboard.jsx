import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="container">
      {console.log(user)}
      <Link to="/newScoreDetails">Enter New Score</Link>
      <Link to="/newCourse">Enter New Course</Link>
    </div>
  );
};

export default Dashboard;
