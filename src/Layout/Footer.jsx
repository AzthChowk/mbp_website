import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import "./header-style.css";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);
  return (
    <div className="footer-wrapper">
      <div
        className="container"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <h1 style={{ color: "#900", fontWeight: "500" }}>Any Queries?</h1>
        <h1 style={{ color: "#000", fontWeight: "500" }}>
          Give us a call, +977-9841458081, 9851013446
        </h1>
        <h3 style={{ fontWeight: "300", color: "#2b3f82" }}>
          We would love to hear from you.
        </h3>
      </div>
      <div className="container">
        <Divider />
      </div>
      <div className="container footer-contents">
        <Grid container sx={{ paddingBottom: "20px" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="footer-contents-cts"
          >
            <h2>Manakamana Binding Press</h2>
            <p>
              Print anything with us, we are operating business since 2010.
              Pre-press, print, post-press, delivery with quality - it is what
              we are.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="footer-contents-cts"
          >
            <h2>Contacts</h2>
            <p>Location: Kalopul, Kathmandu</p>
            <p>Tel: +977-9841458081, 9851013446</p>
            <p>Email : manakamanabindingpress@gmail.com</p>
            <p></p>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="footer-contents-cts"
          >
            <h2>Connects</h2>

            <Box
              className="menu-bar-social-links"
              sx={{
                display: "flex",
                padding: "10px 0px",
                gap: "20px",
              }}
            >
              <FacebookIcon />
              <YouTubeIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </Box>

            <p></p>
            <h2>More Details</h2>
            <Box
              className="menu-bar-social-links"
              sx={{
                display: "flex",
                color: "#fff",
                padding: "10px 0px",
                gap: "20px",
              }}
            >
              <button>Download the profile</button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="footer-contents-cts"
          >
            <h2>Links</h2>
            <Box
              className="footer-links-menu"
              sx={{ display: "flex", gap: "50px" }}
            >
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
              </ul>
              <ul>
                <li>Machineries</li>
                <li>About us</li>
                <li>Contacts</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          background: "linear-gradient(45deg, #2b3f82, #04624e, #ffd254)",
        }}
      >
        <div className="container">
          <p style={{ color: "#fff", textAlign: "center", fontWeight: 200 }}>
            &copy; {year} - Manakamana Binding Press
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
