import React from "react";
import ServiceCard from "./ServiceCard";
import { Grid } from "@mui/material";
import CustomHeader from "./CustomHeader";

const Service = () => {
  return (
    <>
      <CustomHeader title="Our Services" />

      <Grid container sx={{ padding: 1 }}>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ padding: 2 }}>
          <ServiceCard
            img="https://blog.luminite.com/hubfs/flexo%20prepress%20solutions.jpg"
            title="Pre-press"
            para="First and essential part of printing and we handle it with care."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ padding: 2 }}>
          <ServiceCard
            img="https://www.kaocollins.com/inktank/wp-content/uploads/Offset-Printing-Method.jpg"
            title="Printing"
            para="From traditional offset to digital, everything under one station."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ padding: 2 }}>
          <ServiceCard
            img="https://www.printingcenterusa.com/blog/wp-content/uploads/2019/01/snippet-image_perf-bound_1200x975.png"
            title="Post-press"
            para="Binding, Finishing, everything you required."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} sx={{ padding: 2 }}>
          <ServiceCard
            img="https://www.printingcenterusa.com/blog/wp-content/uploads/2019/01/snippet-image_perf-bound_1200x975.png"
            title="Delivery"
            para="We deliver on your doorstep."
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Service;
