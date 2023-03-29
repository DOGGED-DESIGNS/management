import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Forgot from "./pages/Fogot/Forgot";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import "./App.css";
import Side from "./components/Side/Side";
import Dashboard from "./components/Dashbooard/Dashboard";
import AdminNav from "./components/AdminNav/AdminNav";
import Notifications from "./components/Notifications/Notifications";
import Users from "./components/Users/Users";
const App = () => {
  const [toggle, setToggle] = useState(false);

  const turnTrue = () => {
    setToggle(true);
  };
  const turnFalse = () => {
    setToggle(false);
  };
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

          <Route path="/admin">
            <Route index element={<Admin />} />
            <Route
              path="dashboard"
              element={
                <div className="d-flex" style={{ background: "whitesmoke" }}>
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div className=" flex-grow-1">
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                    <Dashboard />
                  </div>
                </div>
              }
            />
            <Route
              path="users"
              element={
                <div className="d-flex">
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div>
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                    <Users />
                  </div>
                </div>
              }
            />
            <Route
              path="notifications"
              element={
                <div className="d-flex">
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div className=" flex-grow-1">
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                    <Notifications />
                  </div>
                </div>
              }
            />
            <Route
              path="feedback"
              element={
                <div className="d-flex">
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div className=" flex-grow-1">
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                  </div>
                </div>
              }
            />
            <Route
              path="deleted"
              element={
                <div className="d-flex">
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div className=" flex-grow-1">
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                  </div>
                </div>
              }
            />
            <Route
              path="notes"
              element={
                <div className="d-flex">
                  <div>
                    <Side turnFalse={turnFalse} toggle={toggle} />
                  </div>
                  <div className=" flex-grow-1">
                    <AdminNav turnTrue={turnTrue} toggle={toggle} />
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
