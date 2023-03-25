import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
