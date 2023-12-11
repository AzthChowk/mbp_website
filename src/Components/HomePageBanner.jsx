import React from "react";
import "./homepagebannerstyle.css";

const HomePageBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container banner-cts">
        {/* <div className="banner-cts-img">
          <img src="/sliderBanner_prepress.svg" alt="" />
        </div> */}
        <div className="banner-cts-des">
          <h1>Manakamana Binding Press</h1>
          <h2>PRE-PRESS, PRINTING, POST-PRESS</h2>

          <h3>Start by sending a quotation request.</h3>
          <button className="primary-btn banner-btn">Send here</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
