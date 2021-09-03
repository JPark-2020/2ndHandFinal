import React from "react";
import "./TrendGallery.css";

const TrendGallery = () => {
  return (
    <div className="trendHolder">
      <div className="trendHeader">Shop Latest Trends</div>
      <div className="trendContainer">
        <div className="trendOne">
          <img src="assets/images/latestsneakers.jpeg" alt="trend1" />
          <h4 className="trendInfo">Hype Sneakers</h4>
        </div>
        <div className="trendTwo">
          <img src="assets/images/shades.jpeg" alt="trend2" />
          <h4 className="trendInfo">Summer Shades</h4>
        </div>
        <div className="trendThree">
          <img src="assets/images/classics.jpeg" alt="trend3" />
          <h4 className="trendInfo">Classics</h4>
        </div>
      </div>
    </div>
  );
};

export default TrendGallery;
