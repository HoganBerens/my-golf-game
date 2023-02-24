import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((response) => response.text())
      .then((data) => setApiData(data));
  }, []);

  return <div>{apiData}</div>;
}

export default App;
