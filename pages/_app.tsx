import { AppProps } from "next/app";
import '../src/assets/scss/global.scss';
import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext, { mainContext } from '../src/context/mainContext/mainContext';
import { isServer } from '../src/utils/routing';
import { NextPageContext } from 'next';


export let AUTH = {
  auth: false,
  isServer: false,
  referer: ''
}
export interface MainProps{
  AUTH: typeof AUTH
}
export interface MainNextPageContext extends NextPageContext, MainProps{}

function MyApp({Component, pageProps}: AppProps) {
  AUTH = pageProps.AUTH
  return (
    <ThemeProvider theme={theme}>
      <MainContext ctx={AUTH}>
        <mainContext.Consumer>
          {(context)=>{
            context.state.ctx.isServer = AUTH.isServer
            return <Component {...pageProps}/>
          }}
        </mainContext.Consumer>
      </MainContext>
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  AUTH.isServer = isServer()
  if(AUTH.isServer){
    console.log('REQUEST!')
    AUTH.auth = true
  }
  ctx.AUTH = AUTH;
  return {
    pageProps: {
      AUTH,
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {})
    }
  }
}