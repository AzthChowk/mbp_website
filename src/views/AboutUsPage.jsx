import React from "react";
import { Grid } from "@mui/material";
import ServicePageCard from "./ServicePageCard";

//Accordion

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PageHeader from "../Components/PageHeader";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AboutUsPage = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <PageHeader pageTitle="About us" />

      <div className="container" style={{ padding: "50px 10px" }}>
        <Grid container>
          <Grid item xs="12" sm="4" md="4" lg="3" xl="3">
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>About Us</h2>
            <ul style={{ listStyle: "none" }}>
              <li>Who we are?</li>
              <li>What we do?</li>
              <li>What services do we provide?</li>
              <li>How do we work?</li>
            </ul>
          </Grid>
          <Grid item xs="12" sm="8" md="8" lg="9" xl="9">
            <ServicePageCard
              title="Who We are?"
              description="Step into the first phase of our creative journey, where ideas transform into tangible designs. Our prepress team is dedicated to ensuring your artwork is optimized for printing excellence. From file preparation to color correction, we meticulously handle every aspect to guarantee a flawless foundation for your project."
            />
            <ServicePageCard
              title="What we do?"
              description="As we move into the heart of our operations, witness the art of printing at its finest. With state-of-the-art technology and a commitment to quality, we bring your designs to life on paper with precision and vibrancy. Whether it's a small run or a large-scale project, our printing capabilities are tailored to meet your unique requirements.
            We provide variety of printing options from a single page to large volumes. We are happy to offer a traditional offset printing as well as modern digital printing to our clients. For the banners and hording boards we have also another unit which primarily focuses on flex printing."
              focus="Print anything with us. Books, Notepads, Calendars, Brochures and leaflets, Diary, Packaging box, Flex print, Sticker print, Posters and Phamplets, Tickets, Business Cards, ID cards "
            />
            <ServicePageCard
              title="What services do we  provide?"
              description="The journey doesn’t end with printing; it evolves into the meticulous realm of post-press. Our skilled craftsmen add the finishing touches that elevate your project to perfection. From binding and finishing to special coatings and embellishments, we ensure that every detail aligns with your vision.
            With the latest machineries we are determined to deliver a quality products with consistency an desired outcome. Our dedicated team will make sure that you get what you have visioned."
            />
            <ServicePageCard
              title="How do we work?"
              description="Timely and secure delivery is the final act in our performance. We understand the importance of deadlines, and our logistics team ensures that your finished products reach you or your desired destination with utmost care. Our commitment to reliability extends to every step, providing you peace of mind as your projects reach their final destinations."
            />
            <h2 style={{ padding: "10px 0" }}>FAQs</h2>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  What does Manakamana Binding Press does?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  What a customer can expect from Manakamana Binding Press?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  Can a customer get a design service as well?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  What is the process of getting my file print?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AboutUsPage;
