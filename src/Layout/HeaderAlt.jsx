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

const HeaderAlt = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "#F3F3F3",
        // background: "linear-gradient(45deg, #2b3f82, #04624e, #ffd254)",
        width: "100%",
        height: "auto",
        color: "#000",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        zIndex: "1000",
      }}
    >
      <Box
        className="container top-header"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box className="logo">
          <NavLink to="/">
            <img src="/mbp black.svg" alt="" width="175px" />
          </NavLink>
        </Box>
        <Box
          className="menu-bar-social-links"
          sx={{
            display: "flex",
            paddingLeft: "20px",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
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
        {/* <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={6}
            xl={6}
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
            lg={6}
            xl={6}
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
                <p>Tel: +977-9841458081, 9851013446</p>
                <p>Email: manakamanabindingpress5@gmail.com</p>
              </Box>
            </Box>
            <Box className="contact-summary" sx={{ display: "flex", gap: 1 }}>
              <Box>
                <FmdGoodIcon fontSize="large" />
              </Box>
              <Box>
                <p>Rudramati Marga, Kalopul</p>
                <p>Kathmandu, Nepal</p>
              </Box>
            </Box>
          </Grid>
        </Grid> */}
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
            paddingLeft: "20px",
            gap: "20px",
            alignItems: "center",
          }}
        >
          Request a quotation
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderAlt;
