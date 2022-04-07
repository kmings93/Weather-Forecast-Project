import React, { useState } from "react";
import { String } from "prop-types";

import "../Assets/Styles/Today.css";

function TodayWeather({ Forecast, Temperature, Humidity, Wind, Description }) {
  return (
    <div className="header">
      <h3>24-hour weather forecast</h3>
      <div className="container ">
        <h3>{Forecast}</h3>
        <h2>{Temperature}</h2>
        <p>{Humidity}</p>
        <p>{Wind}</p>

        <p className="footnote">{Description}</p>
      </div>
    </div>
  );
}

export default TodayWeather;
