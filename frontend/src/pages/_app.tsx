import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "@/components/NavBar";
import { theme } from "../utils/theme";
import { useManageUserId } from "@/hooks/useManageUserId";

export default function App({ Component, pageProps }: AppProps) {
  useManageUserId();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
