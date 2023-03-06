import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewScoreDetails from "./components/newScores/newScoreDetails";
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from "./components/loginPage/loginPage";
import Registration from "./components/registration/registration";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<LoginPage />} />
      <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
      <Route
        path={"/newScoreDetails"}
        exact={true}
        element={<NewScoreDetails />}
      />
      <Route path={"/signUp"} exact={true} element={<Registration />} />
    </Routes>
  );
}

export default App;
