import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#58B7A8",
    },

    background: {
      default: "#F7F9F9",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#172B2B",
      secondary: "#6B7C7C",
    },

    divider: "#E5EBEB",
  },

  typography: {
    fontFamily: "Arial, sans-serif",

    h4: {
      fontSize: "28px",
      fontWeight: 700,
    },

    h6: {
      fontSize: "18px",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;