import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const theme = createTheme({
  typography: {
    fontFamily: ["Prompt"].join(","),
    fontWeightLight: "200",
    fontWeightBold: "700",
    fontWeightRegular: "300",
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            // border: `2px solid ${defaultTheme.palette.primary.main}`,
            color: "defaultTheme.palette.primary.main",
            borderRadius: "50px",
            backgroundColor: "#2196f3",
            "&:hover": { backgroundColor: "#1565c0" },
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            // border: `2px dashed ${defaultTheme.palette.secondary.main}`,
            color: defaultTheme.palette.secondary.main,
            borderRadius: "50px",
          },
        },
        {
          props: { variant: "dashed", size: "large" },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: "dashed", size: "large" },
          style: {
            fontSize: 18,
            backgroundColor: "#009688",
            color: "#fff",
          },
        },
      ],
    },
  },
});
