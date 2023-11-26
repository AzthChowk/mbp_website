import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import Intro from "../../Components/Intro";
import { slides } from "../../assets/data/slideImages";

import EquipmentSlider from "../../Components/EqSlider";
import FeaturedProducts from "../../Components/FeaturedProducts";
import RequestQuotation from "../../Components/RequestQuotation";
import ServicePageAlt from "../../Components/ServicePageAlt";

const HomePage = () => {
  const containerStyles = {
    width: "100%",
    height: "60vh",
  };
  return (
    <>
      {/* <div>
        <MuiCustomizationDemo />
      </div> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className="container">
        <Intro />
        {/* <Divider sx={{ padding: 1 }} /> */}
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
