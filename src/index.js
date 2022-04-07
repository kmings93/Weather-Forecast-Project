import React from "react";
import ReactDOM from "react-dom";

import Screen from "./Screens/Screen";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Screen />
  </React.StrictMode>,
  document.getElementById("root")
);
