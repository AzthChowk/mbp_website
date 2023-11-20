import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import Intro from "../../Components/Intro";
import Service from "../../Components/Service";
import { slides } from "../../assets/data/slideImages";

import Divider from "@mui/material/Divider";
import EquipmentSlider from "../../Components/EqSlider";
import FeaturedProducts from "../../Components/FeaturedProducts";
import RequestQuotation from "../../Components/RequestQuotation";

const HomePage = () => {
  const containerStyles = {
    width: "100%",
    height: "60vh",
  };
  return (
    <>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div className="container">
        <Intro />
        <Divider sx={{ padding: 1 }} />
        <Service />
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
