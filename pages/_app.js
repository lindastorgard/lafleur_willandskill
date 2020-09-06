// import '../styles/globals.css'
import * as React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
