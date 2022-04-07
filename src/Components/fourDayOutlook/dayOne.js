import React from "react";
// import FourDay from "../screen/fourDay";
import "../../Assets/Styles/day.css";
import Thermometer from "../../Assets/Images/thermometer.png";

let DayOneScreen = (props) => {
  //   let [newScreen, setScreen] = useState([]);

  // Days to use
  // const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
  // const dateArr = props.screenOne.map((detail, index) => {
  //   return index === 0 ? detail.date.getDay() : "";
  // });
  // console.log("dateArr", dateArr);
  // const date = new Date(dateArr);
  // let newDate = days[date.getDay()];
  // console.log("new dates", newDate);

  return (
    <>
      <div className="DayOneContainer">
        {/* <h2>Day One Container</h2> */}
        <div>
          {/* {props.ScreenOne[1]} */}
          {/* temperature :{props.ScreenOne[0]} */}
          {/* {props.screenOne.map((detail) => {
            return <p> {detail.temperature.high}</p>;
          })} */}
          {/* {props.screenOne.map((detail, index) => {
            if (index === 0) {
              return (
                <>
                  <p>{detail.temperature.high} </p>
                  <p>{detail.temperature.low}</p>
                </>
              );
            }
          })} */}
          {props.screenOne.map((detail, index) => {
            return index === 0 ? (
              <>
                <section className="MainContainer">
                  <div className="FirstContainer">
                    <img className="WeatherIcon" alt="thunder" src={props.screenOneIcon(detail.forecast)}></img>
                  </div>
                  <div className="SecondContainer">
                    <section className="SecondTopContainer">
                      <span>
                        <h2>{detail.date}</h2>
                      </span>
                      {/* {props.screenOneIcon(detail.forecast)}  */}
                      <span className="ForecastContainer">{detail.forecast}</span>
                    </section>
                    <section className="SecondBottomContainer">
                      <div className="TemperatureContainer">
                        <span>
                          <img className="TemperatureIcon" alt="Temperature icon" src={Thermometer} />
                        </span>
                        <span className="TemperatureDetails">
                          {detail.temperature.low} - {detail.temperature.high}°C
                        </span>
                      </div>
                      <div className="WindContainer">
                        <span>
                          <img className="WindIcon" alt="wind direction" src={props.screenOneDirection(detail.wind.direction)} />
                        </span>
                        <span>
                          {/* {props.screenOneDirection(detail.wind.direction)}  */}
                          {detail.wind.direction} {detail.wind.speed.low} - {detail.wind.speed.high} km/h
                        </span>
                      </div>
                    </section>
                  </div>
                </section>
              </>
            ) : (
              " "
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DayOneScreen;

// // TO GET DAY
// const date = new Date("2022-04-05");
// console.log(date.getDay());
// const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
// let day = days[date.getDay()];
// console.log(day);

// OR pass the function from parent container.
// MTD1: Create a function to handle the Weather Icon
// function handleWeatherPicture(newWeatherIcon) {
//   if (newWeatherIcon.includes("thundery showers")) {
//     return " THUNDER";
//   } else {
//     return "SUNNY";
//   }
// }
