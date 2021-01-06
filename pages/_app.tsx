import { AppProps /*, AppContext */ } from "next/app";

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
