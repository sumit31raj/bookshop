import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#fff",
    },
    otherColor: {
      main: "#999",
    },
  },
  typography:{
    fontFamily:{
      main:"Poppins"
    }
  }
});
