import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <Link to="/newScore">Enter New Score</Link>
    </div>
  );
};

export default Dashboard;