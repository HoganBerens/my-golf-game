import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewScore from "./components/newScores/newScore";
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from "./components/loginPage/loginPage";
import Registration from "./components/registration/registration";

function App() {
  return (
    <Routes>
      <Route path={"/"} exact={true} element={<LoginPage />} />
      <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
      <Route path={"/newScore"} exact={true} element={<NewScore />} />
      <Route path={"/signUp"} exact={true} element={<Registration />} />
    </Routes>
  );
}

export default App;
