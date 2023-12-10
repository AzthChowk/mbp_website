import React from "react";
import ImageSlider from "../../Components/ImageSlider";
import Intro from "../../Components/Intro";
import { slides } from "../../assets/data/slideImages";

import EquipmentSlider from "../../Components/EqSlider";
import FeaturedProducts from "../../Components/FeaturedProducts";
import RequestQuotation from "../../Components/RequestQuotation";
import ServicePageAlt from "../../Components/ServicePageAlt";
import HomePageBanner from "../../Components/HomePageBanner";
import ScrollToTop from "../../Utils/ScrollToTop";
import Clienttele from "../../Components/Clienttele";
import WhyUs from "../../Components/WhyUs";

const HomePage = () => {
  const containerStyles = {
    width: "100%",
    height: "70vh",
  };
  return (
    <>
      <ScrollToTop />
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div> */}
      <div>
        <HomePageBanner />
      </div>
      <div className="container">
        <Intro />
        <ServicePageAlt />
      </div>
      <div
        style={{
          backgroundColor: "#E0F4FF",
          padding: "50px 0",
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1623150502742-6a849aa94be4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          )`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <FeaturedProducts />
          <WhyUs />
        </div>
      </div>
      <div className="container" style={{ padding: "50px 0" }}>
        <Clienttele />
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
