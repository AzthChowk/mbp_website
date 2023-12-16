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
          <Grid
            item
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            sx={{ padding: "10px" }}
          >
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>
              Keep in touch with us
            </h2>
            <p style={{ padding: "20px 0", lineHeight: "2rem" }}>
              We would love to hear from you and would happy to share our works.
              Please do visit our social media pages to see our works and
              activities.
            </p>
            <div
              style={{
                display: "block",
              }}
            >
              <div>
                <h4>Address</h4>
                <p>Rudramati marga, Kalopul</p>
                <p>Kathmandu Nepal</p>
              </div>
              <div style={{ padding: "10px 0" }}>
                <h4>Contact</h4>
                <p>Mobile: +977 9851013446, 9841458081</p>
                <p>Email: manakamanabindingpress5@gmail.com</p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs="12"
            sm="12"
            md="6"
            lg="6"
            xl="6"
            sx={{ padding: "10px" }}
          >
            <RequestQuotationForm />
          </Grid>
        </Grid>
        <div>
          <LocationMap />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
