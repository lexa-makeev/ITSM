import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Page/Auth/Auth";
import Main from "./Page/Main/Main";
import Error from "./Page/Error/Error";
function App() {
  return (
    <Routes>
      {localStorage.getItem("role") !== null && (
        <Route path="/" element={<Main />}></Route>
      )}
      {localStorage.getItem("role") === null && (
        <Route path="/auth" element={<Auth />}></Route>
      )}
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
