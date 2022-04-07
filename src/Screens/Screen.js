import { API } from "../Components/API";
import React, { useEffect, useState } from "react";
import CSS from "../Components/psi.css";

function Screen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get data from the api
      const response = await API.get("/psi?date=2022-04-07");
      console.log(response.data.items[0].readings);
      let update = response.data.items[0].readings;
      setData(update);
    };
    fetchData();
  }, []);

  return (
    <>
      {data != null ? (
        <div>
          <div className="main">
          <h1>24 hour PSI forecast</h1></div>
          <div className="top">
          <h2>National</h2>
          <h2>{data.psi_twenty_four_hourly.national}</h2></div>
          <div className="top">
          <h2 className="west">West</h2>
          <h2 className="west">{data.psi_twenty_four_hourly.west}</h2></div>
          <div className="top">
          <h2 className="east">East</h2>
          <h2 className="east">{data.psi_twenty_four_hourly.east}</h2></div>
          <div className="top">
          <h2 className="north">North</h2>
          <h2 className="north">{data.psi_twenty_four_hourly.north}</h2></div>
          <div className="top">
          <h2 className="south">South</h2>
          <h2 className="south">{data.psi_twenty_four_hourly.south}</h2></div>
          <div className="top">
          <h2 className="central">Central</h2>
          <h2 className="central">{data.psi_twenty_four_hourly.central}</h2>
        
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default Screen;