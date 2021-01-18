import { AppProps } from "next/app";
import '../src/assets/scss/global.scss';
// import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext, { mainContext } from '../src/context/mainContext/mainContext';
import { isServer } from '../src/utils/routing';
import { NextPageContext } from 'next';
import { useEffect } from 'react';
import { useRouter } from "next/router";


export let AUTH = {
  auth: false,
  isServer: false,
  referer: '',
  isLoadingPage: false,
}
export interface MainProps{
  AUTH: typeof AUTH
}
export interface MainNextPageContext extends NextPageContext, MainProps{}

function MyApp({Component, pageProps}: AppProps) {
  AUTH = pageProps.AUTH;
  const router = useRouter()
  useEffect(() => {
    const handleRouteChangeStart = (url, { shallow }) => {
      AUTH.isLoadingPage = false;
    }
    const handleRouteChangeStop = (url, { shallow }) => {
      AUTH.isLoadingPage = false;
      console.error(
        `ROUTER [Stop] ${url} ${shallow ? 'with' : 'without'}!`
      )
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeError', handleRouteChangeStop)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeError', handleRouteChangeStop)
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <MainContext ctx={AUTH}>
        <mainContext.Consumer>
          {(context)=>{
            //"нагланя замена"
            context.state.AUTH.isServer = AUTH.isServer
            context.state.AUTH.isLoadingPage = AUTH.isLoadingPage
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
    // AUTH.auth = true
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