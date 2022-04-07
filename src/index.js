import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import FourDays from "./Screens/fourDays";



//2hrs containter import
import TwoHoursForecastContainer from "./Components/2hrsForecast/TwoHoursForecastContainer";

//24hrs containter import
import TodayContainer from "./Components/24hrsForecast/TodayContainer";

// UVI containter import import

import APIDateTime from "./Components/Utils/APIDateTime";
import UVIAllData from "./Components/UVI/UVIAllData";
import "../src/index.css";
ReactDOM.render(
  <React.StrictMode>

    <FourDays />

    <div className="UVI">
      <TodayContainer />
      <UVIAllData dateTime={APIDateTime()} />
    </div>
    <TwoHoursForecastContainer />

  </React.StrictMode>,
  document.getElementById("root")
);
