import React from "react";
import { NavLink } from "react-router-dom";

const RequestQuotation = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ebebeb",
          backgroundImage: `url(
          "/footerBg-02.png"
        )`,
          backgroundSize: "cover",
          margin: "50px 0",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "125px 20px",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <h1 style={{ fontWeight: "200", fontSize: "28pt" }}>
            Request a Quotation
          </h1>

          <p>
            Click the button to request a quotation or just send us an email at
            manakamanabindingpress5@gmail.com.
          </p>
          <NavLink to="contact">
            <button className="secondary-btn">Click me</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default RequestQuotation;
