import { Grid } from "@mui/material";
import React from "react";
import LocationMap from "../Components/LocationMap";
import PageHeader from "../Components/PageHeader";
import RequestQuotationForm from "../Components/RequestQuotationForm";

const ContactPage = () => {
  return (
    <>
      <PageHeader pageTitle="For contact" />
      <div className="container" style={{ padding: "10px 10px 50px 10px" }}>
        <Grid container>
          <Grid item xs="12" sm="12" md="6" lg="4" xl="4">
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>Contact</h2>
            <h3 style={{ padding: "10px 0" }}>Manakamana Binding Press</h3>
            <p style={{ padding: "10px 0" }}>
              Address : Kalopul, Kathmandu, Nepal
            </p>
            <p style={{ padding: "10px 0" }}>
              Tel : +977-9841458081, 9851013446
            </p>
            <p style={{ padding: "10px 0" }}>
              Email : manakamanabindingpress@gmail.com
            </p>
          </Grid>
          <Grid item xs="12" sm="12" md="6" lg="8" xl="8">
            <RequestQuotationForm />
            <LocationMap />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactPage;
