import React from "react";
import CustomHeader from "./CustomHeader";
import { Button, Grid } from "@mui/material";

import { featuredProductsData } from "../assets/data/featuredProductsData";

import "./featuredproducts.css";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  // const filterList = (value) => {
  //   featuredProductsData.filter((item, index) => {
  //     if (item.category === "value") return item;
  //   });
  // };
  // console.log(filterList);
  const filterList = (value) => {
    const resultList = featuredProductsData.filter((item, index) => {
      if (item.category === value) {
        console.log(item);
        return item;
      }
    });
  };

  return (
    <>
      <CustomHeader title="Explore Our Products" />
      <div style={{ textAlign: "center" }}>
        <NavLink to="/products">
          <button className="secondary-btn">Explore All</button>
        </NavLink>
      </div>
      <Grid container className="featured-products">
        {featuredProductsData.map((item, index) => {
          return (
            <Grid
              className="featured-product-wrapper"
              key={index}
              item
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ padding: 1 }}
            >
              <div className="featured-product-img">
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "225px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="featured-product-title">
                <h5>{item.name}</h5>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FeaturedProducts;
