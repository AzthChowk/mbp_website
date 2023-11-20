import React from "react";

const CustomHeader = (props) => {
  return (
    <h1
      style={{
        padding: "25px 0",
        textAlign: "center",
        fontWeight: "300",
        fontSize: "28pt",
        // textTransform: "uppercase",
      }}
    >
      {props.title}
    </h1>
  );
};

export default CustomHeader;
