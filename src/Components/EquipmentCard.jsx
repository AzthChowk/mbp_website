import React from "react";
import { NavLink } from "react-router-dom";

const EquipmentCard = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <img src={props.image} alt={props.name} width="100%" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button className="secondary-btn">
        <NavLink to="contact">Read more..</NavLink>
      </button>
    </div>
  );
};

export default EquipmentCard;
