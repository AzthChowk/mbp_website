import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import Intro from "../../Components/Intro";
import { slides } from "../../assets/data/slideImages";

import EquipmentSlider from "../../Components/EqSlider";
import FeaturedProducts from "../../Components/FeaturedProducts";
import RequestQuotation from "../../Components/RequestQuotation";
import ServicePageAlt from "../../Components/ServicePageAlt";
import HomePageBanner from "../../Components/HomePageBanner";

const HomePage = () => {
  const containerStyles = {
    width: "100%",
    height: "70vh",
  };
  return (
    <>
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
      <div>
        <HomePageBanner />
      </div>
      <div className="container">
        <Intro />
        <ServicePageAlt />
        <FeaturedProducts />
      </div>
      <div>
        <RequestQuotation />
      </div>
      <div className="container">
        <EquipmentSlider />
      </div>
    </>
  );
};

export default HomePage;
