import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewScore from "./components/newScores/newScore";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path={""} exact={true} element={<Dashboard />} />
      <Route path={"/newScore"} exact={true} element={<NewScore />} />
    </Routes>
  );
}

export default App;
