import React from "react";

const EquipmentCard = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <img src={props.image} alt={props.name} width="100%" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button>Read more..</button>
    </div>
  );
};

export default EquipmentCard;
