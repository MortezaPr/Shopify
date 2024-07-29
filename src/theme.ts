"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#6e50f6",
      dark: "#613ff7",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
