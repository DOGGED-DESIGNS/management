import { useContext } from "react";

import { LoginCreate } from "../context/logincontext";

const Useallcontext = () => {
  const { login, dispatch } = useContext(LoginCreate);

  return { login, dispatch };
};

export default Useallcontext;
