import { Box, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import "./header-style.css";
import { NavLink } from "react-router-dom";

// icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Box
      sx={{
        background: "linear-gradient(45deg, #2b3f82, #04624e, #ffd254)",
        width: "100%",
        height: "auto",
      }}
    >
      <Box className="container top-header">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box className="logo">
              <NavLink to="/">
                <img src="/mbp white.svg" alt="" width="175px" />
              </NavLink>
            </Box>
            <Box className="hamburger-menu">
              {mobileMenuOpen ? (
                <>
                  <CloseIcon
                    fontSize="medium"
                    sx={{
                      color: "#fff",
                    }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </>
              ) : (
                <>
                  <MenuIcon
                    fontSize="medium"
                    sx={{ color: "#fff" }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </>
              )}
            </Box>
          </Grid>

          <Grid
            item
            className="contact-summary-wrapper"
            xs={12}
            sm={6}
            md={8}
            lg={8}
            xl={8}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#fff",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box className="contact-summary" sx={{ display: "flex", gap: 1 }}>
              <Box>
                <ContactPhoneIcon fontSize="large" />
              </Box>
              <Box>
                <h5>Tel: +977-9841458081, 9851013446</h5>
                <h5>Email: manakamanabindingpress@gmail.com</h5>
              </Box>
            </Box>
            <Box className="contact-summary" sx={{ display: "flex", gap: 1 }}>
              <Box>
                <FmdGoodIcon fontSize="large" />
              </Box>
              <Box>
                <h5>Kalopul</h5>
                <h5>Kathmandu, Nepal</h5>
              </Box>
            </Box>
            <Box className="contact-summary" sx={{ display: "flex", gap: 1 }}>
              <Box>
                <AccessTimeIcon fontSize="large" />
              </Box>
              <Box>
                <h5>Sunday - Friday [ 9AM - 6PM ]</h5>
                <h5>Saturday - Close</h5>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        className="container nav-menu-wrapper"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          className={
            mobileMenuOpen ? "mobile-menu-bar-nav-menu" : "menu-bar-nav-menu"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
            <li>
              <NavLink to="equipment">Equipments</NavLink>
            </li>
            <li>
              <NavLink to="aboutus">About us</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </Box>
        <Box
          className="menu-bar-social-links"
          sx={{
            display: "flex",
            color: "#fff",
            paddingLeft: "20px",
            gap: "20px",
          }}
        >
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
