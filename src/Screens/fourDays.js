import React from "react";
import { API } from "../Components/Utils/API";
import { useState, useEffect } from "react";
import DayOneScreen from "../Components/fourDayOutlook/dayOne";
import DayTwoScreen from "../Components/fourDayOutlook/dayTwo";
import DayThreeScreen from "../Components/fourDayOutlook/dayThree";
import DayFourScreen from "../Components/fourDayOutlook/dayFour";
import StormImage from "../Assets/Images/Weather_Thunder.png";
import SunnyImage from "../Assets/Images/Weather_Sunny.png";
import NorthWestImage from "../Assets/Images/NorthWest.PNG";
import WestImage from "../Assets/Images/West.PNG";

function FourDays() {
  const [newWeather, setWeather] = useState([]);

  useEffect(() => {
    getListOfWeather();
  }, []);

  // Create a function to handle the picture
  function handleWeatherPicture(newWeatherIcon) {
    if (newWeatherIcon.includes("thundery showers")) {
      return StormImage;
    } else {
      return SunnyImage;
    }
  }

  function handleWindDirection(newWindDirectionIcon) {
    switch (newWindDirectionIcon) {
      case "N":
        return "North";
      case "NE":
        return "NorthEast";
      case "E":
        return "East";
      case "SE":
        return "SouthEast";
      case "S":
        return "South";
      case "SW":
        return "SouthWest";
      case "W":
        return WestImage;
      case "NW":
        return NorthWestImage;
      default:
        return "error";
    }
  }

  async function getListOfWeather() {
    const responses = await API.get("/4-day-weather-forecast");
    // { params: { date: "2022-04-02" } }
    console.log(responses.data.items[0].forecasts);

    // let arr = newWeather.map((detail) => {
    //   return detail.temperature.high;
    // });
    // console.log("testing array", arr);

    if (responses.status === 200) {
      console.log("responses ok", Array.isArray(responses), responses);

      // Attempt 2a
      let update = newWeather;
      update.push(responses.data.items[0].forecasts);
      console.log("update", update);
      setWeather(responses.data.items[0].forecasts);
      console.log("setWeather", Array.isArray(newWeather), newWeather); //object
      console.log("newWeatherlist", newWeather);
      console.log("list", Array.isArray(newWeather), newWeather);
    }
  }

  return (
    <>
      <section className="ParentContainer">
        <div>
          <h2 style={{ fontFamily: "Arial", backgroundColor: "#cee6c1", fontSize: "3em", margin: "0 auto", textAlign: "center" }}>4-Day Outlook</h2>
        </div>

        <DayOneScreen screenOne={newWeather} screenOneIcon={handleWeatherPicture} screenOneDirection={handleWindDirection} />
        <DayTwoScreen screenTwo={newWeather} screenTwoIcon={handleWeatherPicture} screenTwoDirection={handleWindDirection} />
        <DayThreeScreen screenThree={newWeather} screenThreeIcon={handleWeatherPicture} screenThreeDirection={handleWindDirection} />
        <DayFourScreen screenFour={newWeather} screenFourIcon={handleWeatherPicture} screenFourDirection={handleWindDirection} />
        {/* <ul className = "Tuesday"> */}
      </section>
    </>
  );
}

export default FourDays;

// Test 1 Test Test

// let arr = [1, 2, 3];
// let newArr = arr.map(function (p) {
//   return p * 2;
// });

// console.log(newArr);

// let first = newArr[0];
// console.log(first);

// {
//   newWeather.map((detail, index) => {
//     // Attempt b in return statement.
//     if (index === 0) {
//       return (
//         <>
//           <p>{detail.temperature.high}</p>
//           <p>{detail.temperature.low}</p>
//         </>
//       );
//     }
//   });
// }

// TO GET DAY
// const date = new Date("2022-04-05");
// console.log(date.getDay());
// const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
// let day = days[date.getDay()];
// console.log(day);

// Question: >>>>>>>>>>>>>> Why no break statement required?

//   const Date = new Date();

{
  /* {newWeather[0]} */
}
{
  /* // MTD: test index
        {newWeather.map((detail, index) => {
            // Attempt a : Using ternary operator
          return index === 0 ? (
            <>
              <p>{detail.temperature.high}</p>
              <p>{detail.temperature.low}</p>
            </>
          ) : (
            " "
          );

          // Attempt b in return statement.
          //   return;
          //   if (index === 0) {
          //     return (
          //       <>
          //         <p>{detail.temperature.high}</p>
          //         <p>{detail.temperature.low}</p>
          //       </>
          //     );
          //   }
        })} */
}

{
  /* Attempt b: in return statement */
}
{
  /* {newWeather.map((detail, index) => {
          // Attempt b in return statement.
          if (index === 0) {
            return (
              <>
                <p>{detail.temperature.high}</p>
                <p>{detail.temperature.low}</p>
              </>
            );
          }
        })} */
}
{
  /* {newWeather.map((detail) => {
          return <DayOneScreen screenOne={detail.temperature.high} />;
        })} */
}
{
  /* <DayOneScreen
          screenOne={newWeather.map((detail) => {
            return detail.temperature.high;
          })} />*/
}
{
  /* <p> Hello</p> */
}
{
  /* <h2>{newWeather.list[0]}</h2> */
}

// if (responses === 200) {
//   console.log(responses);
//   let retrieveAPI = (o) => {
//     o.list = responses.data.items;
//     console.table(o);
//     return o;
//   };
//   setWeather(retrieveAPI);
//   console.log(retrieveAPI);
// }

//   setWeather(() => {
//     // state.list = responses.data.items[0];
//     // state.list = [responses.data.items[0].forecasts[0]];
//     newWeather.list = responses.data.items[0].forecasts[0];
//     console.log("new state", typeof state.list);
//     // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> This is an object. Shouldn't it be an array when we update into state? A: is an object
//     console.log("new state", state);
//     return state;
//   });

//   // Attempt 2b : Spread
//   let update = [...newWeather]; // need to be { }
//   // let newList = [...update.list];
//   console.log("üpdate spread", update);
//   //   update.push(responses.data.items[0].forecasts);
//   // console.log("update", update);
//   setWeather(update.push(responses.data.items[0].forecasts));
//   console.log("new", newWeather);
//   //   console.log("setWeather", Array.isArray(newWeather), newWeather);
//   //   console.log(newWeather.list);
//   //   console.log("list", Array.isArray(newWeather.list), newWeather.list);

//   function WeatherItems() {
//     let temperature = newWeather.list[0].temperature.high;
//   }

//   const [newWeather, setWeather] = useState({ list: [] });

// Attempt 2 >>>>> Check why responses do not work? Need responses.status

// let Storm;
// let Sunny;

//   let temperature = setWeather(update);
//   console.log(temperature);

//   console.log(newWeather[0].temperature.high); // 34
//   console.log(newWeather[0].forecast);

//   update = responses.data.items[0].forecasts[0];
//   console.log("new state", Array.isArray(newWeather), newWeather);
