import TownWeather from "./TownWeather";
import "../Assets/Styles/DisplayTowns.css";

function DisplayTowns({ townArray }) {
  return (
    <>
      <div className="heading">
        <div>Town</div>
        <div>Weather</div>
      </div>

      <div>
        {townArray.map((element) => {
          return (
            <TownWeather
              key={element.area}
              town={element.area}
              weather={element.forecast}
            />
          );
        })}
      </div>
    </>
  );
}

export default DisplayTowns;
