import { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewScoreDetails from "./components/newScores/newScoreDetails";
import Dashboard from "./components/dashboard/dashboard";
import LoginPage from "./components/loginPage/loginPage";
import Registration from "./components/registration/registration";
import NewCourse from "./components/newCourse/newCourse";
import NewScore from "./components/newScores/newScore";
import AddClubs from "./components/dashboard/addClubs";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route
        path={"/"}
        exact={true}
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <LoginPage />
          </UserContext.Provider>
        }
      />
      <Route
        path={"/dashboard"}
        exact={true}
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <Dashboard />
          </UserContext.Provider>
        }
      />
      <Route
        path={"/addClubs"}
        exact={true}
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <AddClubs />
          </UserContext.Provider>
        }
      />
      <Route path={"/newCourse"} exact={true} element={<NewCourse />} />
      <Route
        path={"/newScoreDetails"}
        exact={true}
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <NewScoreDetails />
          </UserContext.Provider>
        }
      />
      <Route
        path={"/newScore"}
        exact={true}
        element={
          <UserContext.Provider value={{ user, setUser }}>
            <NewScore />
          </UserContext.Provider>
        }
      />
      <Route path={"/signUp"} exact={true} element={<Registration />} />
    </Routes>
  );
}

export default App;
