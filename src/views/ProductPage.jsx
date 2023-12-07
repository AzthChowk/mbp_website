import React from "react";
import { Grid } from "@mui/material";
import ServicePageCard from "./ServicePageCard";
import PageHeader from "../Components/PageHeader";
import { productsList } from "../assets/data/productsList";
import { NavLink } from "react-router-dom";

import "./productPageStyle.css";

const ProductPage = () => {
  return (
    <>
      <PageHeader pageTitle="Our Products" />
      <div className="container" style={{ padding: "10px 10px 50px 10px" }}>
        <Grid container>
          <Grid
            item
            xs="12"
            sm="4"
            md="3"
            lg="3"
            xl="3"
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>Products</h2>
            <ul style={{ listStyle: "none" }}>
              <li>Books / Notebooks</li>
              <li>Marketing Products</li>
              <li>Office Stationeries</li>
              <li>Packaging Products</li>
              <li>Others</li>
            </ul>
          </Grid>
          <Grid
            item
            xs="12"
            sm="9"
            md="9"
            lg="9"
            xl="9"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr",
              },
            }}
          >
            {productsList.map((item, index) => {
              return (
                <Grid
                  className="productListMap"
                  key={index}
                  sx={{
                    margin: 1,
                    // border: "1px solid #999",
                    borderRadius: "5px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    "&:hover": { backgroundColor: "#EEF5FF" },
                  }}
                >
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      width="100%"
                      height="200px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "10px 20px" }}>
                    <h3>{item.name}</h3>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      {item.description}
                    </p>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      <strong>Product category :</strong> {item.category}
                    </p>
                    <p
                      style={{
                        padding: "10px 0",
                        fontSize: "11pt",
                      }}
                    >
                      <strong>Available sizes :</strong> {item.availableSizes}
                    </p>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      {item.bindingOptions ? (
                        <>
                          <strong>Binding options :</strong>{" "}
                          {item.bindingOptions}
                        </>
                      ) : (
                        <></>
                      )}
                    </p>
                    <button className="secondary-btn">
                      <NavLink to="/contact">Request a quotation</NavLink>
                    </button>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProductPage;
