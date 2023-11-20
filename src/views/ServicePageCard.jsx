import React from "react";

const ServicePageCard = (props) => {
  return (
    <>
      <h2 style={{ fontWeight: "500", padding: "10px 0" }}>{props.title}</h2>
      <p style={{ fontWeight: "400" }}>{props.description}</p>
      <h4 style={{ padding: "10px 0" }}>{props.focus}</h4>
    </>
  );
};

export default ServicePageCard;
