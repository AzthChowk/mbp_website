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
      className="navbar-wrapper"
      sx={{
        backgroundColor: "#F3F3F3",
        // background: "linear-gradient(45deg, #2b3f82, #04624e, #ffd254)",
        width: "100%",
        height: "auto",
        color: "#000",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
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
        <Box
          className="hamburger-menu"
          sx={{ alignItems: "center", padding: "10px 0 0 0" }}
        >
          {mobileMenuOpen ? (
            <>
              <CloseIcon
                fontSize="medium"
                sx={{
                  color: "#000",
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </>
          ) : (
            <>
              <MenuIcon
                fontSize="medium"
                sx={{ color: "#000" }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </>
          )}
        </Box>
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
              <NavLink to="equipments">Equipments</NavLink>
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
          <NavLink to="/contact" style={{ color: "#000" }}>
            Request a quotation
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderAlt;
