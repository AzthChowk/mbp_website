import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./homepageservice.css";

const ServiceCardAlt = ({ image, title, description }) => {
  return (
    <Grid container>
      <Grid
        className="homePageServiceImg"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ padding: 2 }}
      >
        <img
          src={image}
          alt=""
          style={{
            padding: "10px",
            width: "100%",
            objectFit: "contain",
            borderRadius: "5px",
          }}
        />
      </Grid>
      <Grid
        className="homePageServiceDes"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        sx={{ padding: 2 }}
      >
        <h1
          style={{
            fontSize: "26pt",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#FFBB5C",
          }}
        >
          {title}
        </h1>
        <p style={{ lineHeight: "2rem", paddingRight: "40px" }}>
          {description}
        </p>
        <button className="primary-btn">
          <NavLink to="services">Read more</NavLink>
        </button>
      </Grid>
    </Grid>
  );
};

export default ServiceCardAlt;
