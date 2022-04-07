//
// Function Declaration method - UVILegend()
//

const UVILegend = () => {
  const legendArr = [
    //
    // Values of - label: "Default" forms the base color settings found in "../../Assets/Styles/UVI.css" if there was no data flow between the components
    // {
    //   label: "Default",
    //   pClr: "gainsboro",
    //   sClr: "rgba(184, 184, 184, 0.2)",
    //   shdClr: "rgba(184, 184, 184, 1)",
    //   min: null,
    //   max: null,
    // },
    {
      label: "Low",
      pClr: "seagreen",
      sClr: "rgba(30, 120, 40, 0.2)",
      shdClr: "rgba(30, 120, 40, 1)",
      min: 0,
      max: 2,
    },
    {
      label: "Moderate",
      pClr: "gold",
      sClr: "rgba(255, 165, 2, 0.25)",
      shdClr: "rgba(255, 165, 2, 1)",
      min: 3,
      max: 5,
    },
    {
      label: "High",
      pClr: "darkorange",
      sClr: "rgba(205, 110, 0, 0.2)",
      shdClr: "rgba(205, 110, 0, 1)",
      min: 6,
      max: 7,
    },
    {
      label: "Very High",
      pClr: "crimson",
      sClr: "rgba(170, 20, 34, 0.25)",
      shdClr: "rgba(170, 20, 34, 1)",
      min: 8,
      max: 10,
    },
    {
      label: "Extreme",
      pClr: "darkviolet",
      sClr: "rgba(120, 0, 155, 0.2)",
      shdClr: "rgba(120, 0, 155, 1)",
      min: 11,
      max: 100,
    },
  ];

  return legendArr;
};

export default UVILegend;
