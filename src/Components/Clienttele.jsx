import React from "react";
import CustomHeader from "./CustomHeader";
import "./clienttele.css";
import { Grid } from "@mui/material";

const Clienttele = () => {
  return (
    <div className="container intStyle">
      <CustomHeader title="We are trusted by" />
      <Grid container>
        <Grid
          item
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
          className="clienttele-cts"
        >
          <img src="/mbp black.svg" alt="" width={150} />
        </Grid>
        <Grid
          item
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
          className="clienttele-cts"
        >
          <img src="/mbp black.svg" alt="" width={150} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Clienttele;
