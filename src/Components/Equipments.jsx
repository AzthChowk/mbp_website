import React from "react";
import { equipmentsList } from "../assets/data/equipmentsList";
import CustomHeader from "./CustomHeader";

import { Grid } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./equipments.css";
import { NavLink } from "react-router-dom";

const Equipments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <CustomHeader title="View Our Equipments Section" />
      <Grid container className="equipments-list-wrapper">
        {equipmentsList.map((item, index) => {
          return (
            <Grid
              className="equipments-list-grid"
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              sx={{ padding: 1 }}
            >
              <div className="equipment-img">
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="equipment-details">
                <h4 style={{ fontWeight: "500" }}>{item.name}</h4>
                <p style={{ padding: "10px 0" }}>
                  {item.description.slice(0, 150)}...
                </p>
                <button>
                  <NavLink to="equipment">Read more</NavLink>
                </button>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Equipments;
