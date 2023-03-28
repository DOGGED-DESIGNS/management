import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar/Navbar";
import Forgot from "./pages/Fogot/Forgot";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route
              path="signup"
              element={
                <>
                  <Signup />
                </>
              }
            />
            <Route path="forgot" element={<Forgot />} />
            <Route
              path="home"
              element={
                <>
                  <Navbar />

                  <Home />
                </>
              }
            />
            <Route
              path="profile"
              element={
                <>
                  <Navbar />

                  <Profile />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
