import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "./Theme";

// const defaultTheme = createTheme();

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Montserrat"].join(","),
//   },
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: "dashed" },
//           style: {
//             textTransform: "none",
//             border: `2px solid ${defaultTheme.palette.primary.main}`,
//             color: defaultTheme.palette.primary.main,
//           },
//         },
//         {
//           props: { variant: "dashed", color: "secondary" },
//           style: {
//             border: `2px dashed ${defaultTheme.palette.secondary.main}`,
//             color: defaultTheme.palette.secondary.main,
//           },
//         },
//         {
//           props: { variant: "dashed", size: "large" },
//           style: {
//             borderWidth: 4,
//           },
//         },
//         {
//           props: { variant: "dashed", size: "large" },
//           style: {
//             fontSize: 18,
//             backgroundColor: "#009688",
//             color: "#fff",
//           },
//         },
//       ],
//     },
//   },
// });

const MuiCustomizationDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="dashed" sx={{ m: 1 }}>
        Dashed
      </Button>
      <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
        Secondary
      </Button>
      <Button variant="dashed" size="large" sx={{ m: 1 }}>
        Large
      </Button>
      <Button variant="dashed" color="secondary" size="large" sx={{ m: 1 }}>
        Secondary large
      </Button>
    </ThemeProvider>
  );
};

export default MuiCustomizationDemo;
