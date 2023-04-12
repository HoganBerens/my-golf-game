import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewScoreDetails from "./components/newScores/newScoreDetails";
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from "./components/loginPage/loginPage";
import Registration from "./components/registration/registration";
import NewCourse from "./components/newCourse/newCourse";
import NewScore from "./components/newScores/newScore";
import AddClubs from "./components/dashboard/addClubs";
import HoleByHole from "./components/newCourse/holeByHole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact={true} element={<LoginPage />} />
        <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
        <Route path={"/addClubs"} exact={true} element={<AddClubs />} />
        <Route path={"/newCourse"} exact={true} element={<NewCourse />} />
        <Route
          path={"/newScoreDetails"}
          exact={true}
          element={<NewScoreDetails />}
        />
        <Route path={"/newScore"} exact={true} element={<NewScore />} />
        <Route path={"/signUp"} exact={true} element={<Registration />} />
        <Route path={"/hole-by-hole"} exact={true} element={<HoleByHole />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
