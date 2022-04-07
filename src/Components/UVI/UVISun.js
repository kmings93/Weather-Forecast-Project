import React, { useState, useEffect } from "react";
import { APICustom01 } from "../Utils/API";
import ConvertTime from "../Utils/ConvertTime";

const UVISun = (props) => {
  const { cDate = "err--UVISun-cDate" } = props;
  let [sun, setSun] = useState(["err--UVISun-sun-setSun"]);

  // API input for Sunrise/Sunset readings - latitude & longtitude values for The Republic of Singapore, with current date
  const lat = "lat=" + 1.357107;
  const long = "lng=" + 103.8194992;
  const today = "date=" + "2022-04-08";

  const childPathSun = "json?" + lat + "&" + long + "&" + today;
  // console.log(childPathSun);

  const getSun = async () => {
    const response = await APICustom01.get(childPathSun);
    const sunrise = response.data.results.sunrise;
    const sunset = response.data.results.sunset;

    if (response.status === 200) {
      setSun([sunrise, sunset]);
      // console.log(`Sunrise (UTC): ${sunrise}`);
      // console.log(`Sunset (UTC): ${sunset}`);
    }
  };

  useEffect(() => {
    getSun();
  }, []);

  return (
    <>
      <u>Sunrise</u>
      <br />
      {ConvertTime(cDate, sun[0], "long", true)}
      <br />
      <br />
      <u>Sunset</u>
      <br />
      {ConvertTime(cDate, sun[1], "long", true)}
    </>
  );
};

export default UVISun;
