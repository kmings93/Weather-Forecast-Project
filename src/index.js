import React from "react";
import ReactDOM from "react-dom";

import Screen from "./Screens/Screen";

import "./index.css";
import App from "./App";

// UVI Import 
import APIDateTime from "../Components/Utils/APIDateTime";
import UVIAllData from "../Components/UVI/UVIAllData";



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Screen />
  
  
// UVI Component
<UVIAllData dateTime={APIDateTime()} />
  
</React.StrictMode>,
  document.getElementById("root")
);
