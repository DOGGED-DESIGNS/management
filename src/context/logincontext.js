import { createContext, useReducer } from "react";

import { loginReducer } from "../reducers/loginreducer";

export const LoginCreate = createContext();

const Logincontext = (prop) => {
  const [login, dispatch] = useReducer(loginReducer, {
    auth: {},
    note: [],
    load1: false,
    load2: false,
  });
  return (
    <LoginCreate.Provider value={{ login, dispatch }}>
      {prop.children}
    </LoginCreate.Provider>
  );
};

export default Logincontext;
