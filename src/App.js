import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const checkStatus = () => {
    localStorage.getItem("loggedIn") === "1"
      ? setLoggedIn(true)
      : setLoggedIn(false);
  };
  useEffect(checkStatus, []);
  const onLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };
  return (
    <div className="App">
      {!loggedIn && <LoginPage setLoggedIn={setLoggedIn} />}
      {loggedIn && <HomePage logout={onLogout} />}
    </div>
  );
}

export default App;
