import { AppProps /*, AppContext */ } from "next/app";
import '../src/assets/scss/global.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import { useState } from 'react';
import { maps } from '../test/test';
import MainContext from '../src/context/mainContext/mainContext';

function MyApp({Component, pageProps}: AppProps) {
  const [state, setState] = useState(maps)
  return (
    <ThemeProvider theme={theme}>
      <MainContext>
        <Component {...pageProps} />
      </MainContext>
    </ThemeProvider>
  );
}

export default MyApp;
