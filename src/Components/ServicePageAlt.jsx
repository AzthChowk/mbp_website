import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ServiceCardAlt from "./ServiceCardAlt";
import CustomHeader from "./CustomHeader";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ServicePageAlt = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#03506F",
        borderRadius: "5px",
        color: "#fff",
        margin: "40px 0",
      }}
    >
      <CustomHeader title="Our Services" />
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          sx={{
            "& button": {
              border: "1px solid #fff",
              padding: { xs: "10px 25px", sm: "10px 30px", md: "10px 50px" },
              borderRadius: "50px",
              color: "#FFBB5C",
              margin: { xs: "20px 5px", sm: "20px 10px", md: "20px 10px" },
            },
            "& button:hover": {
              backgroundColor: "#FFBB5C",
              color: "#fff",
            },
            "& button.Mui-selected": {
              backgroundColor: "#FFBB5C",
              color: "#000",
            },
            ".MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab label="Pre-Press" {...a11yProps(0)} />
          <Tab label="Printing" {...a11yProps(1)} />
          <Tab label="Post-Press" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ServiceCardAlt
          image="/prePress.svg"
          title="Pre-Press"
          description="Step into the first phase of our creative journey, where ideas transform into tangible designs. Our prepress team is dedicated to ensuring your artwork is optimized for printing excellence. From file preparation to color correction, we meticulously handle every aspect to guarantee a flawless foundation for your project."
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ServiceCardAlt
          image="/printing.svg"
          title="Printing"
          description="As we move into the heart of our operations, witness the art of printing at its finest. With state-of-the-art technology and a commitment to quality, we bring your designs to life on paper with precision and vibrancy. Whether it's a small run or a large-scale project, our printing capabilities are tailored to meet your unique requirements. We provide variety of printing options from a single page to large volumes. We are happy to offer a traditional offset printing as well as modern digital printing to our clients. For the banners and hording boards we have also another unit which primarily focuses on flex printing. Print anything with us."
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ServiceCardAlt
          image="/postPress.svg"
          title="Post-Press"
          description="The journey doesn’t end with printing; it evolves into the meticulous realm of post-press. Our skilled craftsmen add the finishing touches that elevate your project to perfection. From binding and finishing to special coatings and embellishments, we ensure that every detail aligns with your vision. With the latest machineries we are determined to deliver a quality products with consistency an desired outcome. Our dedicated team will make sure that you get what you have visioned."
        />
      </CustomTabPanel>
    </Box>
  );
};

export default ServicePageAlt;
