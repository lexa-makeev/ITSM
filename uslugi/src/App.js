import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Page/main.css";
import Auth from "./Page/Auth/Auth";
import Main from "./Page/Main/Main";
import Error from "./Page/Error/Error";
import CardIncedent from "./Page/CardIncedent/CardIncedent";
import Header from "./Components/Header";
import NewCardIncedent from "./Page/NewCardIncedent/NewCardIncedent";
function App() {
  return (
    <>
      {localStorage.getItem("role") !== null && <Header />}
      <Routes>
        {localStorage.getItem("role") !== null && (
          <Route path="/newcard" element={<NewCardIncedent />}></Route>
        )}
        {localStorage.getItem("role") !== null && (
          <Route path="/" element={<Main />}></Route>
        )}
        {localStorage.getItem("role") !== null && (
          <Route path="/card" element={<CardIncedent />}></Route>
        )}
        {localStorage.getItem("role") === null && (
          <Route path="/auth" element={<Auth />}></Route>
        )}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
