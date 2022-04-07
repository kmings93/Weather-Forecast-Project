import { API } from "../Components/API";
import React, { useEffect, useState } from "react";

function Screen() {
    const [data, setData] = useState([]);

useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
        // get data from the api
        const response = await API.get("/psi?date=2022-04-07")
        console.log(response.data.items[0].readings);
        let update = data;
        console.log("update", update);
        update.push(response.data.items[0].readings);
        setData(update);
        console.log("setData", data[0].psi_twenty_four_hourly);
    };
    fetchData();
}, []);

    return (
        {data ? console.log('true') : console.log('false')};
        // <>
        //     {/* <h1 className="main">24 hour PSI forecast</h1>
        //     <h2 className="national">National</h2>
        //     <h2 className="national">{data[0].psi_twenty_four_hourly.national}</h2>
        //     <h2 className="west">West</h2>
        //     <h2 className="west">{data[0].psi_twenty_four_hourly.west}</h2>
        //     <h2 className="east">East</h2>
        //     <h2 className="east">{data[0].psi_twenty_four_hourly.east}</h2>
        //     <h2 className="north">North</h2>
        //     <h2 className="north">{data[0].psi_twenty_four_hourly.north}</h2>
        //     <h2 className="south">South</h2>
        //     <h2 className="south">{data[0].psi_twenty_four_hourly.south}</h2>
        //     <h2 className="central">Central</h2>
        //     <h2 className="central">{data[0].psi_twenty_four_hourly.central}</h2> */}
        //     </>

    )
}

export default Screen;