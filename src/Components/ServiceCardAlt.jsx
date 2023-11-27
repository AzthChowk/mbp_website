import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const ServiceCardAlt = ({ image, title, description }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: 2 }}>
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "80%",
            objectFit: "contain",
            borderRadius: "5px",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ padding: 2 }}>
        <h1
          style={{
            fontSize: "26pt",
            fontWeight: "900",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
        <p style={{ lineHeight: "2rem" }}>{description}</p>
        <button
          style={{
            margin: "50px 0",
            padding: "10px 40px",
            border: "1px solid #fff",
          }}
        >
          <NavLink to="services">Read more...</NavLink>
        </button>
      </Grid>
    </Grid>
  );
};

export default ServiceCardAlt;
