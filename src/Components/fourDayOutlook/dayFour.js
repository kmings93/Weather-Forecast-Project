import Thermometer from "../../Assets/Images/thermometer.png";
import "../../Assets/Styles/day.css";

let DayFourScreen = (props) => {
  //   let [newScreen, setScreen] = useState([]);

  return (
    <>
      <div className="DayFourContainer">
        {/* <h2>Day Four Container</h2> */}
        {/* <p>{props.weather}</p> */}
        <div>
          {props.screenFour.map((detail, index) => {
            return index === 3 ? (
              <>
                <section className="MainContainer">
                  <div className="FirstContainer">
                    <img className="WeatherIcon" alt="thunder" src={props.screenFourIcon(detail.forecast)}></img>
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
                          <img className="WindIcon" alt="wind direction" src={props.screenFourDirection(detail.wind.direction)} />
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

export default DayFourScreen;
