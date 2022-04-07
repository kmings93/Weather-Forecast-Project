import React, { useState, useEffect } from "react";
import { API } from "../Utils/API";
import UVIMeasures from "./UVIMeasures";

const UVIHourly = (props) => {
  const {
    cFunc = "err--UVIHourly-cFunc",
    cDateTime = "err--UVIHourly-cDateTime",
    cCat = "err--UVIHourly-cCat",
    cPClr = "err--UVIHourly-cPClr",
  } = props;

  let [UVI, setUVI] = useState("err--UVIHourly-UVI");

  // API input for UVI hourly readings - child path concatenated with YYYY-MM-DD[T]HH:mm:ss (SGT)
  // for testing - "2022-02-03T19:45:00"
  const childPathHourly = "uv-index?date_time=" + cDateTime;

  // The value of accessPt is the array's index, '0' being the most current reading given the date/time queried. Values are between '0' and '12'.
  const accessPt = 0;

  const getUVI = async () => {
    const response = await API.get(childPathHourly);

    let value = response.data.items[0].index[accessPt].value;
    const itemsAll = response.data.items;
    console.log(itemsAll);

    if (response.status === 200) {
      value >= 0 && value <= 12 ? setUVI(value) : setUVI(null);
    }
  };

  const childToParent = () => {
    return cFunc(UVI);
  };

  useEffect(() => {
    getUVI();
    childToParent();
  }, [UVI]);

  return <>{<UVIMeasures indexUV={UVI} indexCat={cCat} pClr={cPClr} />}</>;
};

export default UVIHourly;
