import "../..//Assets/Styles/TownWeather.css";

function TownWeather({ town, weather }) {
  function weatherIcon() {
    let icon = "";
    switch (weather) {
      case "Light Showers":
        icon = "🌦";
        break;

      case "Partly Cloudy (Day)":
        icon = "🌥";
        break;
      case "Heavy Showers":
        icon = "🌨";
        break;
      case "Showers":
        icon = "🌧";
        break;
      case "Thundery Showers":
        icon = "⛈";
        break;
      case "Cloudy":
        icon = "☁";
        break;
      case "Light Rain":
        icon = "🌦";
        break;

      default:
        break;
    }
    return icon;
  }

  return (
    <div className="TownWeather">
      <div>{town}</div>
      <div>
        <div className="span">{weatherIcon({ weather })}</div>
        {weather}
      </div>
    </div>
  );
}

export default TownWeather;
