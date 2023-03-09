import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container ">
      <Link to="/newScoreDetails">Enter New Score</Link>
      <Link to="/newCourse">Enter New Course</Link>
    </div>
  );
};

export default Dashboard;
