import { Grid } from "@mui/material";
import React from "react";
import PageHeader from "../Components/PageHeader";
import { productsList } from "../assets/data/productsList";

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
            <div>
              <h2 style={{ padding: "10px 0" }}>Request a Quotation</h2>
              <div>
                <form action="">
                  <label htmlFor="">Full name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your full name"
                    style={{
                      width: "100%",
                      padding: "10px",
                      margin: "10px 0",
                      outline: "none",
                    }}
                  />
                  <br />
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your email address"
                    style={{
                      width: "100%",
                      padding: "10px",
                      margin: "10px 0",
                      outline: "none",
                    }}
                  />
                  <br />
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea
                    id="message"
                    name="message"
                    rows="10"
                    cols="50"
                    style={{
                      width: "100%",
                      padding: "10px",
                      margin: "10px 0",
                      outline: "none",
                    }}
                  ></textarea>
                  <br />
                  <button type="submit">Request a Quotation</button>
                </form>
              </div>
            </div>
            <div style={{ margin: "20px 0" }}>
              <h2 style={{ padding: "10px 0" }}>Locate us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4995.145772003001!2d85.33622682782813!3d27.714153838486848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1700447531989!5m2!1sen!2snp"
                width="100%"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ContactPage;
