import React, { useState, useEffect } from "react";
import "./MainGallery.css";

const MainGallery = () => {
  const [counter, setCounter] = useState(1);

  const clickHandler = () => {
    setCounter(1);
  };

  const click2Handler = () => {
    setCounter(2);
  };

  const click3Handler = () => {
    setCounter(3);
  };

  const click4Handler = () => {
    setCounter(4);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 3) {
        setCounter(counter + 1);
      } else {
        setCounter(1);
      }
      document.getElementById("radio" + counter).checked = true;
    }, 3000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="slider">
      <div className="slides">
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          onClick={clickHandler}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          onClick={click2Handler}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          onClick={click3Handler}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio4"
          onClick={click4Handler}
        />

        <div className="slide first">
          <div className="slideInfo">
            <h3>CURATED COLLECTIONS</h3>
            <p>BAPE under $100</p>
            <button className="slideinfoButton">Shop Now</button>
          </div>
          <img className="slideImage" src="/assets/images/maingallery1.jpeg" />
        </div>

        <div className="slide">
          <div className="slideInfo">
            <h3>SELL FASTER</h3>
            <p>
              Your Listings, <br /> Boosted by 2nd Hand
            </p>
            <button className="slideinfoButton">List Now</button>
          </div>
          <img className="slideImage" src="/assets/images/maingallery2.jpeg" />
        </div>

        <div className="slide">
          <div className="slideInfo">
            <h3>BUYING & SELLING</h3>
            <p>
              Most Expensive Items Sold <br />
              This Week
            </p>
            <button className="slideinfoButton">Read</button>
          </div>
          <img className="slideImage" src="/assets/images/maingallery3.jpeg" />
        </div>

        <div className="slide">
          <div className="slideInfo">
            <h3>LIST THESE NOW</h3>
            <p>
              Most In-Demand Items <br />
              This Week
            </p>
            <button className="slideinfoButton">Read</button>
          </div>
          <img className="slideImage" src="/assets/images/maingallery4.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default MainGallery;
