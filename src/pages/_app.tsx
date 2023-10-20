import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar></NavBar>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
