import Thermometer from "../../Assets/Images/thermometer.png";
import "../../Assets/Styles/day.css";

let DayTwoScreen = (props) => {
  //   let [newScreen, setScreen] = useState([]);

  return (
    <>
      <div className="DayTwoContainer">
        {/* <h2>Day Two Container</h2> */}
        {/* <p>{props.weather}</p> */}
        <div>
          {props.screenTwo.map((detail, index) => {
            return index === 1 ? (
              <>
                <section className="MainContainer">
                  <div className="FirstContainer">
                    <img className="WeatherIcon" alt="thunder" src={props.screenTwoIcon(detail.forecast)}></img>
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
                          <img className="WindIcon" alt="wind direction" src={props.screenTwoDirection(detail.wind.direction)} />
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

export default DayTwoScreen;
