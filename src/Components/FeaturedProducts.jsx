import React from "react";
import CustomHeader from "./CustomHeader";
import { Button, Grid } from "@mui/material";

import { featuredProductsData } from "../assets/data/featuredProductsData";

import "./featuredproducts.css";

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
        <button>Explore All</button>
        {/* <button
          onClick={() => {
            filterList("marketingproducts");
          }}
        >
          Marketing Products
        </button>
        <button
          onClick={() => {
            filterList("officestationary");
          }}
        >
          Office Stationeries
        </button>
        <button
          onClick={() => {
            filterList("packagingbox");
          }}
        >
          Packaging Boxes
        </button>
        <button
          onClick={() => {
            filterList("booksnotepad");
          }}
        >
          Books / Notepads
        </button> */}
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
                <h4>{item.name}</h4>
              </div>
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://goodmockups.com/wp-content/uploads/2019/06/Free-US-Paper-Half-Fold-Brochure-Mockup-PSD-Set-1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://www.graphicpear.com/wp-content/uploads/2019/01/Branding-Mockup.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://ultida.com/wp-content/uploads/2021/07/tissue-packaging-mockup.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://mockuphunt.co/cdn/shop/products/Box_Mockups_OK_2_b6ed3ef7-bf46-4127-b18f-57f96fffe450_800x.jpg?v=1524830968"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://mockupsq.com/wp-content/uploads/edd/2018/07/front-and-stacked-book-psd-mockup.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://mockups-design.com/wp-content/uploads/2017/11/Desk_Calendar_Mockup_OK_3.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://goodmockups.com/wp-content/uploads/2022/03/4-Free-Personal-To-Do-List-Notebook-Diary-Mockup-PSD-Set-3.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 1 }}>
          <img
            src="https://newapi.axiomprint.com/uploads/Monthly_Wall_Calendars-710.jpg"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid> */}
    </>
  );
};

export default FeaturedProducts;
