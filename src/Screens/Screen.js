import { useEffect, useState } from "react";
import "../Assets/Styles/Screen.css";
import { API } from "../Components/Utils/API";
import Navbar from "../Components/Navbar";
import DisplayTowns from "../Components/DisplayTowns";
import warningIcon from "../Assets/Images/warning.png";

import {
  westTowns,
  eastTowns,
  centralTowns,
  northTowns,
  southTowns,
} from "./SingaporeDistrict";
import TownWeather from "../Components/TownWeather";

let today = new Date().toISOString();

function Screen() {
  const [TwoHrsData, setTwoHrsData] = useState();
  const [active, setActive] = useState({ active: "west" });
  const [input, setInput] = useState("");
  const [filterSearch, setFilterSearch] = useState({ area: "", forecast: "" });

  function parseDate(date) {
    //function to convert ISO date from API to UTC format
    let convertToDate = new Date(date);
    let getHours = convertToDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return getHours;
  }

  function setInputHandler(input) {
    // input handler for the search bar
    setInput(input);
    const filterSearch = TwoHrsData[0].all.filter((element) => {
      return element.area
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase());
    });
    setFilterSearch(filterSearch);
  }
  async function getData() {
    // get data from 2hr forecast api with date and time of loading
    const response = await API.get("/2-hour-weather-forecast", {
      params: { today },
    });

    const filteredData = response.data.items.map((hrData) => {
      return {
        period_start: hrData.valid_period.start,
        period_end: hrData.valid_period.end,
        west: sortTown(hrData.forecasts, westTowns),
        north: sortTown(hrData.forecasts, northTowns),
        central: sortTown(hrData.forecasts, centralTowns),
        south: sortTown(hrData.forecasts, southTowns),
        east: sortTown(hrData.forecasts, eastTowns),
        all: hrData.forecasts,
      };
    });

    function sortTown(array_, town) {
      //function to sort API data to the respective district (North, South ..)
      const townSorted = array_.filter((element) => {
        if (town.includes(element.area)) {
          return element;
        }
      });
      return townSorted;
    }

    setTwoHrsData(filteredData);
  }
  useEffect(() => {
    getData();
  }, []);

  function toggleState(activeState) {
    //set state base on button(West, North ...) clicked
    setActive(activeState);
  }

  return (
    <div>
      <div className="main">
        <h1>2-hour NowCast</h1>
        {TwoHrsData ? (
          <p>
            Forecast from {parseDate(TwoHrsData[0].period_start)} to{" "}
            {parseDate(TwoHrsData[0].period_end)}
          </p>
        ) : (
          <p>Loading...</p>
        )}
        <Navbar changeStateFunc={toggleState} setInputFunc={setInputHandler} />
      </div>
      {TwoHrsData ? (
        input ? (
          <div className="main">
            {filterSearch.length ? (
              filterSearch.map((el) => {
                return <TownWeather town={el.area} weather={el.forecast} />;
              })
            ) : (
              <div className="errorBox">
                <img
                  src={warningIcon}
                  width={100}
                  height={100}
                  alt="No such area!"
                ></img>
                <h1>No such area!</h1>
              </div>
            )}
          </div>
        ) : (
          <div className="main">
            <div className="screen"></div>
            <div className="tab-container">
              <DisplayTowns townArray={TwoHrsData[0][active.active]} />
            </div>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Screen;
