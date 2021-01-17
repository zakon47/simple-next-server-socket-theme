import { AppProps } from "next/app";
import '../src/assets/scss/global.scss';
import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext from '../src/context/mainContext/mainContext';
import { useRouter } from 'next/router';
import {useEffect} from "react";
import {EVENTS, IData} from "../src/context/events";
import {isServer} from "../src/utils/routing";

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  useEffect(()=>{
    const handleEventStart = (event, req)=>{
      EVENTS.setReferer(event)
    }
    router.events.on("routeChangeStart", handleEventStart);
    return ()=>{
      router.events.off("routeChangeStart", handleEventStart)
    }
  },[])
  return (
    <ThemeProvider theme={theme}>
      <MainContext>
        <Component {...pageProps}/>
      </MainContext>
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // const redirect = (path: string)=>{
  //   ctx.isServer
  //     ? ctx.res.writeHead(302, { Location: path }).end()
  //     : Router.push(path)
  //   return;
  // }
  ctx = { ...ctx,
    isServer: isServer(),
    auth: true,
  }
  // if(ctx.isServer){
  //   // console.log('REQUEST')
  //   // EVENTS.setAuth(ctx.auth)
  //   EVENTS.set(ctx)
  // }
  return {
    pageProps: {
      isServer: ctx.isServer,
      auth: !ctx.isServer,
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    }
  }
}


export const initialize = async (ctx):Promise<IData> => {
  const context:IData = {
    isServer: isServer(),
    auth: false,
    from: ''
  }
  if(ctx.isServer){
    // console.log('REQUEST')
    // EVENTS.setAuth(ctx.auth)
    EVENTS.set(ctx)
  }
  return context
}