import "../../Assets/Styles/UVI.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const UVIMeasures = (props) => {
  const { indexUV = "err--Measures-indexUV", indexCat = "err--Measures-indexCat", pClr = "err--Measures-pClr" } = props;
  let [sunSafety, setSunSafety] = useState([""]);

  // Sun safety measures depending on the index range & category it belongs to
  const getSunSafety = () => {
    switch (indexCat) {
      case "Low": {
        sunSafety = ["No protection needed.", "You can safely stay outside using minimal sun protection."];
        break;
      }

      case "Moderate":
      case "High": {
        sunSafety = [
          "Protection needed.",
          "Seek shade during late morning through mid-afternoon.",
          "When outside, generously apply broad-spectrum SPF-15 or higher sunscreen on exposed skin, and wear protective clothing, a wide-brimmed hat, and sunglasses.",
        ];
        break;
      }

      case "Very High":
      case "Extreme": {
        sunSafety = [
          "Extra protection needed.",
          "Be careful outside, especially during late morning through mid-afternoon.",
          "If your shadow is shorter than you, seek shade and wear protective clothing, a wide-brimmed hat, and sunglasses, and generously apply a minimum of  SPF-15, broad-spectrum sunscreen on exposed skin.",
        ];
        break;
      }

      case "Out Of Bounds": {
        sunSafety = [""];
        break;
      }

      default: {
        // err--Measures-switch-sunSafety
        sunSafety = [""];
        break;
      }
    }

    setSunSafety(sunSafety);
  };

  useEffect(() => {
    getSunSafety();
  }, [indexCat]);

  return (
    <>
      <u>Current index</u>
      <br />
      <br />
      <div className="divMeasures" style={{ borderColor: pClr, color: pClr }}>
        {indexUV >= 0 ? `${indexUV} - ` : null} {indexCat}
      </div>
      <br />
      Recommended sun safety measures are:
      <ul>
        {sunSafety.map((measures) => (
          <li key={uuidv4()}>{measures}</li>
        ))}
      </ul>
    </>
  );
};

export default UVIMeasures;
