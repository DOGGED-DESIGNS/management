import { useState, useContext } from "react";
import Useallcontext from "./Useallcontext";
const Loginhook = () => {
  const { login, dispatch } = Useallcontext();

  return { login, dispatch };
};

export default Loginhook;
