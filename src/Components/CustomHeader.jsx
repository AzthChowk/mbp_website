import React from "react";

const CustomHeader = (props) => {
  return (
    <h1
      style={{
        padding: "25px 0",
        textAlign: "center",
        fontWeight: "500",
        fontSize: "24pt",
      }}
    >
      {props.title}
    </h1>
  );
};

export default CustomHeader;
