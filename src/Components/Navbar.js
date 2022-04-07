import { useState } from "react";
import "./Navbar.css";

function Navbar({ changeStateFunc, setInputFunc }) {
  const [activeClick, setActiveClick] = useState({ active: "west" });

  function clickHandler(e) {
    let activebutton = e.target.getAttribute("name");
    setActiveClick({ active: activebutton });
    changeStateFunc({ active: activebutton });
  }

  function checkActive(name) {
    // Check if user click on button to change classname to active
    if (activeClick.active === name) {
      return "active";
    } else return null;
  }

  function searchHandler(e) {
    setInputFunc(e.target.value);
  }

  return (
    <div className="Navbar">
      <div className="buttons">
        <div name="west" className={checkActive("west")} onClick={clickHandler}>
          West
        </div>
        <div
          name="north"
          className={checkActive("north")}
          onClick={clickHandler}
        >
          North
        </div>
        <div
          name="central"
          className={checkActive("central")}
          onClick={clickHandler}
        >
          Central
        </div>
        <div
          name="south"
          className={checkActive("south")}
          onClick={clickHandler}
        >
          South
        </div>
        <div name="east" className={checkActive("east")} onClick={clickHandler}>
          East
        </div>
      </div>
      <input
        type="text"
        placeholder="Search by district eg. Bishan"
        onChange={searchHandler}
      ></input>
    </div>
  );
}

export default Navbar;
