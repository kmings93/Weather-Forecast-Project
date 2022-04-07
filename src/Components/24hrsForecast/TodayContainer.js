/**
 * Component: TodayContainer
 *
 * 1. async function getWeather
 *    Description: get 24-hour weather forecast every 1 hour interval
 *    Error Handling: error message is passed to as a props to presentation component <TodayCard> for  display
 * 2. Utility function: formatData
 *    Description: select required info, format it with emoji into a string ready for the presentation *    component <TodayCard> for display
 * 3. UI Components:
 *    <TodayWeather> to display the result,
 *    <ErrorMsg> to display error message.
 *
 * 4. Application:
 *    - container and presentation pattern: separating logic and UI
 *    - make API call, error handling and manipulate data
 *    - conditional rendering
 *    - communicating from parent to child using props.
 *
 */
import React, { useEffect, useState } from "react";
import TodayCard from "../../Screens/TodayWeather";
import { API } from "../Utils/API";
import ErrorMsg from "../../Screens/ErrorMsg";
import TodayWeather from "../../Screens/TodayWeather";

const TodayContainer = () => {
  const defaultState = {
    Forecast: null,
    Humidity: null,
    Temperature: null,
    Wind: null,
    Description: "",
  };

  const [weather, setWeather] = useState(defaultState);
  const [errmsg, setErrMsg] = useState(null);

  // run on load
  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    // get the current date

    try {
      let today = new Date().toISOString();
      const { status, data } = await API.get("24-hour-weather-forecast", {
        params: { lodgement_date: today },
      });

      if (status === 200) {
        let Summary = formatData(data);
        setErrMsg(null);
        setWeather(Summary);
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.status); // 👉️ 404
        /*console.log(err.response.statusText); // 👉️ Not Found
        console.log(err.message); // 👉️ Request failed with status code 404
        console.log(err.response.headers); // 👉️ {... response headers here}
        console.log(err.response.data); // 👉️ {... response data here}*/
        setErrMsg(`Error Message: ${err.response.statusText} ${err.message}`);
        setWeather({});
      } else if (err.response) {
        console.log(err.request);
        setErrMsg(`Error Message: ${err.message}`);
        setWeather({});
      } else {
        console.log(err.message);
        setWeather({});
        setErrMsg(`Error Message: ${err.message}`);
      }
    }
    setTimeout(getWeather, 3.6e6);
  }

  /**
   *
   * @param {*} data :
   * @returns : return an object with the property of forecast, humidity, temperature and wind attribute in formated string ready for display.
   * Description extracted from http://www.weather.gov.sg/learn_forecast/#forecast1
   */

  function formatData(data) {
    console.log("formatData function");
    let Summary = {};

    data.items.map((item) => {
      const { forecast, relative_humidity, temperature, wind } = item.general;

      const { direction, speed } = wind;
      const { start, end } = item.valid_period;
      Summary.Period = `${start} - ${end}`;

      switch (forecast) {
        case "Rain":
          Summary.Forecast = `🌧 ${forecast}`;
          Summary.Description = `📍 Steady water droplets that fall from stratiform or layer clouds.
                                 Tends to affect a wide area, and is more persistent than showers.`;
          break;
        case "Showers":
          Summary.Forecast = `🌦 ${forecast}`;
          Summary.Description = `📍 Brief precipitation from cumuliform clouds. Characterised by the
                                sudden start and end of the precipitation. 
                                Sometimes occur in spells,and usually localised over an area.`;
          break;
        case "Thundery Showers":
          Summary.Forecast = `⚡️ ${forecast} ⛈`;
          Summary.Description = `📍 Precipitation from cumulonimbus clouds accompanied by thunder and
                                lightning, and sometimes strong wind gusts at the ground. Under
                                suitable conditions can produce waterspouts and/or hail.`;
          break;
        case "Fair":
          Summary.Forecast = `🌤 ${forecast}`;
          Summary.Description = `📍 Generally sunny with few clouds in the sky. No occurrence of rain or showers.`;
          break;
        case "Hazy":
          Summary.Forecast = `🌫 ${forecast}`;
          Summary.Description = `📍 Suspension of particulate matter (e.g. dust, smoke particles) in the air, causing reduced visibility.`;
          break;
        case "Partly Cloudy":
          Summary.Forecast = `🌥 ${forecast}`;
          Summary.Description = `📍 Between 3 eighths and 4 eighths of the sky is covered by clouds. 
                                 It has the same connotation as “partly sunny”, which is a mix of sun and clouds.`;
          break;
        case "Cloudy":
          Summary.Forecast = `⛅️ ${forecast}`;
          Summary.Description = `📍 Between 5 eighths and 7 eighths of the sky is covered by clouds.`;
          break;
        case "Overcast":
          Summary.Forecast = `☁️ ${forecast}`;
          Summary.Description = `📍 The whole sky is completely covered by cloud, giving dull, grey 
                                 conditions.`;
          break;
      }

      Summary.Temperature = temperature.low + " - " + temperature.high + " ℃";
      Summary.Humidity =
        "💧 " + relative_humidity.low + " - " + relative_humidity.high + " %";
      Summary.Wind =
        "🧭 " + direction + " " + speed.low + " - " + speed.high + " km/h";
      return Summary;
    });
    return Summary;
  }

  return (
    <div>
      {errmsg ? (
        <ErrorMsg title={"24-hour weather forecast"} err={errmsg} />
      ) : (
        <TodayWeather {...weather} />
      )}
    </div>
  );
};

export default TodayContainer;
