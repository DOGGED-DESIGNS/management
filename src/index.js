import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Logincontext from "./context/logincontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Logincontext>
    <App />
  </Logincontext>
);
