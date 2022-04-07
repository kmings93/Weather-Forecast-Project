import React from "react";
import "../Assets/Styles/Today.css";

const ErrorMsg = (props) => {
  return (
    <div className="header">
      <h3>{props.title}</h3>
      <h6 className="err"> {props.err}</h6>
    </div>
  );
};

export default ErrorMsg;
