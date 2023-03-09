import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export const UserContext = createContext({ user: {}, setUser: () => {} });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContext.Provider value={{ user: {}, setUser: () => {} }}>
      <App />
    </UserContext.Provider>
  </BrowserRouter>
);
