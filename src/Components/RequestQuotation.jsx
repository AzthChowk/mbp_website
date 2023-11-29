import React from "react";
import { NavLink } from "react-router-dom";

const RequestQuotation = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ebebeb",
          backgroundImage: `url(
          "https://images.unsplash.com/photo-1490093158370-1a6be674437b?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )`,
          backgroundBlendMode: "multiply",
          margin: "50px 0",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "125px",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "200", fontSize: "28pt" }}>
            Request a Quotation
          </h1>

          <p>
            Click the button to request a quotation or just send us an email at
            mail@mail.com.
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
