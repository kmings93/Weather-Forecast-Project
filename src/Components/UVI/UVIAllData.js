import "../../Assets/Styles/UVI.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import UVISun from "./UVISun";
import UVIHourly from "./UVIHourly";
import UVILegend from "./UVILegend";
import ConvertTime from "../Utils/ConvertTime";

const UVIAllData = (props) => {
  const { dateTime = "err--UVIAllData-dateTime" } = props;

  const startYMD = 0;
  const endYMD = 10;

  const startHMS = 11;
  const endHMS = 16;

  const onlyDate = dateTime.slice(startYMD, endYMD);
  const onlyTime = dateTime.slice(startHMS, endHMS);

  let [UVIAPI, setUVIAPI] = useState("err--UVIAllData-uviapi");
  let [category, setCategory] = useState("err--UVIAllData-category");
  let [pClr, setPClr] = useState("err--UVIAllData-pClr");
  let [sClr, setSClr] = useState("err--UVIAllData-sClr");
  let [shdClr, setShdClr] = useState("err--UVIAllData-shdClr");
  let [legendArr, setLegendArr] = useState([]);

  const legend = UVILegend();
  let legendArrTmp = [];

  const inverseDF = (UVIAPI) => {
    setUVIAPI(UVIAPI);
  };

  const GetData = () => {
    for (let i = 0; i < legend.length; i++) {
      const lb = legend[i].label;
      const mn = legend[i].min;
      const mx = legend[i].max;
      const pc = legend[i].pClr;
      const sc = legend[i].sClr;
      const shd = legend[i].shdClr;

      if (UVIAPI >= 0) {
        if (UVIAPI >= mn && UVIAPI <= mx) {
          setCategory((category = lb));
          setPClr((pClr = pc));
          setSClr((sClr = sc));
          setShdClr((shdClr = shd));
        }
      } else {
        setCategory((category = "Out Of Bounds"));
      }

      mx !== 100 ? legendArrTmp.push(mn + " to " + mx + " - " + lb) : legendArrTmp.push("Above " + mn + " - " + lb);
      setLegendArr(legendArrTmp);
      // console.log(legendArrTmp);
      // console.log(`Inside GetData() - ${legendArr.length}`);
    }
  };

  useEffect(() => {
    GetData();
  }, [UVIAPI]);

  // console.log(`Outside GetData() - ${legendArr.length}`);

  return (
    <>
      <div className="divUVI">
        <div className="divUVIHeader">
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ultraviolet Index</h2>
        </div>
        <div className="divUVIHeaderMain" style={{ backgroundColor: pClr }}>
          <div className="divUVILarge" style={{ textShadow: `12px 16px ${shdClr}` }}>
            <i>&nbsp;&nbsp;&nbsp;{UVIAPI}</i>
          </div>
          {category}
          <br />
          {ConvertTime(onlyDate, onlyTime, "short", false)} on {onlyDate}
          <div className="divUVILegend">
            <fieldset className="fieldset" style={{ borderColor: sClr }}>
              <legend>
                <i>&nbsp;&nbsp;Legend&nbsp;&nbsp;</i>
              </legend>
              <dl>
                {legendArr.map((legend) => (
                  <dt key={uuidv4()}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{legend}</dt>
                ))}
              </dl>
              <br />
            </fieldset>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="divUVIMain">A high UV Index reading means a larger dose of UV radiation for the same amount of time spent in the sun.</div>
        <br />
        <br />
        <hr />
        <div className="divUVIChild">
          <br />
          <br />
          <UVISun cDate={onlyDate} />
          <br />
          <br />
          <br />
          <br />
          <UVIHourly cFunc={inverseDF} cDateTime={dateTime} cCat={category} cPClr={pClr} />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default UVIAllData;
