import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

const HomePageRoot = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePageRoot;
