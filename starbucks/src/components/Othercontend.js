import React, { useState } from "react";
import "../style/allcss.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faBoxesPacking,
  faClock,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import Bestseller from "./Bestseller";
import Drink from "./Drink";
import Food from "./Food";

const Othercontend = () => {
    
  const [componentToShow, setComponentToShow] = useState("bestseller");

  const showBestseller = () => {
    setComponentToShow("bestseller");
  };

  const showNewArrivals = () => {

    setComponentToShow("newArrivals");
    
  };

  const showTrending = () => {
    setComponentToShow("trending");
  };

  const styel = {
    color: "black",
    backgroundColor: "white",
  };
  const [style1, setstyle1] = useState(styel);
  const [style2, setstyle2] = useState([]);

  const getbtn1 = () => {
    setstyle1(styel);
    setstyle2({});
  };
  const getbtn2 = () => {
    setstyle1({});
    setstyle2(styel);
  };
  return (
    <>
      <div className="contend">
        <p>
          <a href="/home">Home </a>
          <a href="/order"> > order</a>
        </p>
      </div>

      <div className="location">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FontAwesomeIcon icon={faLocation} />
          <input type="text" placeholder="No Store Selected" />
          <FontAwesomeIcon icon={faClock} />
          00 mins
        </div>

        <div>
          <button id="btn1" onClick={getbtn1} style={style1}>
            <FontAwesomeIcon icon={faBowlFood} /> Dine-in
          </button>
          <button id="btn2" onClick={getbtn2} style={style2}>
            <FontAwesomeIcon icon={faBoxesPacking} />
            Takeaway
          </button>
        </div>
      </div>
      <div className="selectionbar">
        <button onClick={showNewArrivals}>Drink</button>
        <button onClick={showTrending}>Food</button>
        <button onClick={showBestseller}>Merchandise</button>
      </div>
      <div className="innerelement">
        
        {componentToShow === "bestseller" && <Bestseller />}
        {componentToShow === "newArrivals" && <Drink />}
        {componentToShow === "trending" && <Food />}
      </div>
    </>
  );
};

export default Othercontend;
