"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#6e50f6",
      dark: "#613ff7",
    },
    grey: {
      100: "#f8f8f8",
      200: "#f1f1f1",
      300: "#e1e1e1",
      400: "#c4c4c4",
      500: "#a7a7a7",
      600: "#8a8a8a",
      700: "#6e6e6e",
      800: "#515151",
      900: "#353535",
    },
  },
  typography: {
    fontFamily: "IranSans",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#6e50f6", // Customize border color on focus
            },
          },
          "& .MuiInputLabel-root": {
            "&.Mui-focused": {
              color: "#6e50f6", // Customize label color on focus
            },
          },
        },
      },
    },
  },
});

export default theme;
