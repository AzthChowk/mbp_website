import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";

const ServiceCard = (props) => {
  return (
    <div>
      <img
        src={props.img}
        alt=""
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "2px",
        }}
      />
      <h2 style={{ fontWeight: "400", color: "#0a4449" }}>{props.title}</h2>
      <p style={{ padding: "10px 0" }}>{props.para}</p>
      <ThemeProvider theme={theme}>
        <Button variant="dashed">
          <NavLink to="services">Read more</NavLink>
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default ServiceCard;
