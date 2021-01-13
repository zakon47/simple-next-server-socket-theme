import { AppProps /*, AppContext */ } from "next/app";
import '../src/assets/scss/global.scss';
import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext, { mainContext } from '../src/context/mainContext/mainContext';
import { NextPageContext } from 'next';

export interface MainIProps {
  isServer: boolean
  auth: boolean
}

export interface MainNextPageContext extends NextPageContext{
  isServer: boolean
  auth: boolean
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainContext>
        <mainContext.Consumer>
          {(ctx)=>{
            if(pageProps.isServer && ctx.state.auth === null){
              ctx.state.auth = pageProps.auth;
            }{
              pageProps.auth = ctx.state.auth;
            }
            const auth = pageProps.isServer ? pageProps.auth: ctx.state.auth;
            AUTH.auth = auth;
            return <Component {...pageProps} isServer={pageProps.isServer} auth={auth}/>
          }}
        </mainContext.Consumer>
      </MainContext>
    </ThemeProvider>
  );
}

export default MyApp;

export const AUTH = {
  auth: false,
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  ctx.isServer = typeof window === 'undefined';
  ctx.auth = false;
  if(ctx.isServer){
    console.log('REQUEST')
  }else{
    ctx.auth = AUTH.auth;
  }
  return {
    pageProps: {
      isServer: ctx.isServer,
      auth: ctx.auth,
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    }
  }
}