import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EquipmentCard from "./EquipmentCard";
import { equipmentsList } from "../assets/data/equipmentsList";
import CustomHeader from "./CustomHeader";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: 0,
        top: -20,
      }}
      onClick={onClick}
    >
      <button style={{ padding: "5px 7px" }}>
        <NavigateBeforeIcon />
      </button>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: 50,
        top: -20,
      }}
      onClick={onClick}
    >
      <button style={{ padding: "5px 7px" }}>
        <NavigateNextIcon />
      </button>
    </div>
  );
}

const EquipmentSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <CustomHeader title="Our Equipments Section" />
      <Slider {...settings}>
        {equipmentsList.map((item, index) => {
          return (
            <div key={index} style={{ padding: "30px" }}>
              <div style={{ margin: "10px 0", padding: "10px" }}>
                <img
                  style={{ objectFit: "contain", padding: "20px" }}
                  src={item.image}
                  alt={item.name}
                  width="100%"
                  height="300px"
                />
                <h3 style={{ padding: "10px 0" }}>{item.name}</h3>
                <p>{item.description.slice(0, 150)}...</p>
                <button>
                  <NavLink to="equipment">Read more..</NavLink>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default EquipmentSlider;
