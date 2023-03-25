import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
