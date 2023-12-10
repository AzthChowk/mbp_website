import React from "react";
import CustomHeader from "./CustomHeader";
import { Grid } from "@mui/material";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  return (
    <div
      style={{
        padding: "40px 0",
        alignItems: "center",
      }}
    >
      <h3
        style={{
          fontWeight: "400",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        So, why choose
      </h3>
      <h1
        style={{
          fontWeight: "700",
          textAlign: "center",
          fontSize: "36pt",
          color: "#2c2c2c",
        }}
      >
        Manakamana Binding Press?
      </h1>
      <h3 style={{ fontWeight: "300", textAlign: "center" }}>
        What makes Manakamana Binding Press stand out?
      </h3>

      <Grid
        sx={{
          padding: "50px 0",
          display: "grid",
          gap: "25px",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
        }}
      >
        <WhyUsCard
          title="Wide Printing Range"
          image="/whyusPrint.svg"
          description="We offer wide range of complete printing services under one roof. From traditional offset to modern digital, we offer complete printing range at promising rate."
        />
        <WhyUsCard
          title="Modern equipments"
          image="/whyusEquip.svg"
          description="We are equipped with cutting edge equipments. Our staff are so trained and helped the product to be delivered with perfection."
        />
        <WhyUsCard
          title="Reliable Quality"
          image="/whyusQuality.svg"
          description="The commitment to reliable quality has remained a constant. We are determined to deliver a quality product."
        />
        <WhyUsCard
          title="No Minimum Orders"
          image="/whyusOrd.svg"
          description="Save money and avoid any leftover stock. The products you sell are created only when your customer places an order."
        />
        <WhyUsCard
          title="Resonable Cost"
          image="/whyusCost.svg"
          description="The cost is the important factor. We believe we offer a very good option regarding the price."
        />
        <WhyUsCard
          title="Faster Outcome"
          image="/whyustime.svg"
          description="Just give a order, we will deliver within the time frame."
        />
      </Grid>
    </div>
  );
};

export default WhyUs;
