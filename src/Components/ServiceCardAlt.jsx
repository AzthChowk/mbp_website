import React from "react";
import { Grid } from "@mui/material";

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
            fontWeight: "600",
          }}
        >
          {title}
        </h1>
        <p style={{ lineHeight: "2rem" }}>{description}</p>
        <button>Read more...</button>
      </Grid>
    </Grid>
  );
};

export default ServiceCardAlt;
