import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../../utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "@/components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar></NavBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
