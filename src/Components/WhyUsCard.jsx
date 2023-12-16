import React from "react";

const WhyUsCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <img
          src={props.image}
          alt={props.title}
          width={90}
          style={{
            padding: "10px",
            flex: 1,
            border: "2px solid #164863",
            borderRadius: "50px",
            // border: "2px solid #eef5ff",
          }}
        />
      </div>
      <div style={{ flex: 3, padding: "0px 25px" }}>
        <h2 style={{ fontWeight: "500", color: "#164863" }}>{props.title}</h2>
        <p
          style={{
            fontWeight: "300",
            paddingBottom: "30px",
            paddingTop: "10px",
          }}
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
