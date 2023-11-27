import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import HeaderAlt from "../../Layout/HeaderAlt";

const HomePageRoot = () => {
  return (
    <>
      <div>
        <HeaderAlt />
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
