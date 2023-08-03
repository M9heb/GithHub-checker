import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [valid, setValid] = useState(false);
  const checkStatus = () => {
    localStorage.setItem("loggedIn", "1");
    localStorage.getItem("loggedIn") === "1"
      ? setLoggedIn(true)
      : setLoggedIn(false);
  };
  useEffect(checkStatus, []);

  const setValidUser = (email, password) => {
    if (isEmailValid(email) && isPasswordValid(password)) setValid(true);
  };
  const isEmailValid = (email) => {
    if (email.includes("@")) return true;
    else return false;
  };
  const isPasswordValid = (password) => {
    if (password.length >= 8) return true;
    else return false;
  };
  const onLogin = (email, password) => {
    setValidUser(email, password);
    if (valid) localStorage.setItem("loggedIn", "1");
  };
  const onLogout = () => {
    localStorage.removeItem("loggedIn");
  };

  return (
    <div className="App">
      {!loggedIn && <LoginPage login={onLogin} />}
      {loggedIn && <HomePage logout={onLogout} />}
    </div>
  );
}

export default App;
