import React from "react";
import { Grid } from "@mui/material";
import ServicePageCard from "./ServicePageCard";
import PageHeader from "../Components/PageHeader";
import { equipmentsList } from "../assets/data/equipmentsList";

const EquipmentPage = () => {
  return (
    <>
      <PageHeader pageTitle="Our Equipments" />
      <div className="container" style={{ padding: "10px 10px 50px 10px" }}>
        <Grid container>
          <Grid
            item
            xs="12"
            sm="3"
            md="3"
            lg="3"
            xl="3"
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            <h2 style={{ fontWeight: "500", padding: "10px 0" }}>Equipments</h2>
            <ul style={{ listStyle: "none" }}>
              <li>Printing</li>
              <li>Post-Press</li>
              <li>Logistics</li>
              <li>Others</li>
            </ul>
          </Grid>
          <Grid
            item
            xs="12"
            sm="9"
            md="9"
            lg="9"
            xl="9"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
                xl: "1fr 1fr 1fr",
              },
            }}
          >
            {equipmentsList.map((item, index) => {
              return (
                <Grid
                  key={index}
                  sx={{
                    margin: 1,
                    // border: "1px solid #999",
                    borderRadius: "5px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      width="100%"
                      height="200px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "10px 20px",
                    }}
                  >
                    <h3>{item.name}</h3>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      {item.description}
                    </p>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      <strong>Equipment category :</strong> {item.category}
                    </p>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      <strong>Used for :</strong> {item.usedFor}
                    </p>
                    <p style={{ padding: "10px 0", fontSize: "11pt" }}>
                      <strong>Size :</strong> {item.sheetSize}
                    </p>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default EquipmentPage;

// <Grid
//   key={index}
//   item
//   sx={{
//     display: "flex",
//     borderRadius: "2px",
//     margin: "10px",
//     border: "1px solid #999",
//     // backgroundColor: "#999",
//     padding: "20px",
//   }}
// >
//   <Grid item xs="12" sm="6" md="4" lg="4" xl="">
//     <img src={item.image} alt="" width="100%" />
//   </Grid>
//   <Grid
//     item
//     xs="12"
//     sm="6"
//     md="8"
//     lg="8"
//     xl="8"
//     sx={{ padding: "0 20px" }}
//   >
//     <h4>{item.name}</h4>
//     <p style={{ padding: "20px 0" }}>{item.description}</p>
//   </Grid>
// </Grid>
