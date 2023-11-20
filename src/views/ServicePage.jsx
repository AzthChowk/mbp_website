import React from "react";
import { Grid } from "@mui/material";
import ServicePageCard from "./ServicePageCard";
import PageHeader from "../Components/PageHeader";

const ServicePage = () => {
  return (
    <>
      <PageHeader pageTitle="Our Services" />
      <div className="container" style={{ padding: "10px 10px 50px 10px" }}>
        <Grid container>
          <Grid
            item
            xs="12"
            sm="4"
            md="3"
            lg="3"
            xl="3"
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>Services</h2>
            <ul style={{ listStyle: "none" }}>
              <li>Pre-Press</li>
              <li>Printing</li>
              <li>Post-Press</li>
              <li>Delivery</li>
            </ul>
          </Grid>
          <Grid item xs="12" sm="8" md="9" lg="9" xl="9">
            <ServicePageCard
              title="Pre-Press"
              description="Step into the first phase of our creative journey, where ideas transform into tangible designs. Our prepress team is dedicated to ensuring your artwork is optimized for printing excellence. From file preparation to color correction, we meticulously handle every aspect to guarantee a flawless foundation for your project."
            />
            <ServicePageCard
              title="Printing"
              description="As we move into the heart of our operations, witness the art of printing at its finest. With state-of-the-art technology and a commitment to quality, we bring your designs to life on paper with precision and vibrancy. Whether it's a small run or a large-scale project, our printing capabilities are tailored to meet your unique requirements.
            We provide variety of printing options from a single page to large volumes. We are happy to offer a traditional offset printing as well as modern digital printing to our clients. For the banners and hording boards we have also another unit which primarily focuses on flex printing."
              focus="Print anything with us. Books, Notepads, Calendars, Brochures and leaflets, Diary, Packaging box, Flex print, Sticker print, Posters and Phamplets, Tickets, Business Cards, ID cards "
            />
            <ServicePageCard
              title="Post-Press"
              description="The journey doesn’t end with printing; it evolves into the meticulous realm of post-press. Our skilled craftsmen add the finishing touches that elevate your project to perfection. From binding and finishing to special coatings and embellishments, we ensure that every detail aligns with your vision.
            With the latest machineries we are determined to deliver a quality products with consistency an desired outcome. Our dedicated team will make sure that you get what you have visioned."
            />
            <ServicePageCard
              title="Delivery"
              description="Timely and secure delivery is the final act in our performance. We understand the importance of deadlines, and our logistics team ensures that your finished products reach you or your desired destination with utmost care. Our commitment to reliability extends to every step, providing you peace of mind as your projects reach their final destinations."
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ServicePage;
