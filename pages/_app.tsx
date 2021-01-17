import { AppProps } from "next/app";
import '../src/assets/scss/global.scss';
import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext, { mainContext } from '../src/context/mainContext/mainContext';
import { useRouter } from 'next/router';
import {useEffect} from "react";
import {EVENTS, IServiceData} from "../src/context/events";
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
      <mainContext.Consumer>
        {(context)=>{
          console.log(99999999, context, pageProps)
          return <Component {...pageProps}/>
        }}
      </mainContext.Consumer>
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
  // ctx = { ...ctx,
  //   isServer: isServer(),
  //   auth: true,
  // }
  // if(ctx.isServer){
  //   // console.log('REQUEST')
  //   // EVENTS.setAuth(ctx.auth)
  //   EVENTS.set(ctx)
  // }
  let INIT = await initialize(ctx, true)
  return {
    pageProps: {
      INIT,
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {})
    }
  }
}


/*
инициализировали страницу (с авторизацией и без)
 */
export const initialize = async (ctx, auth = false):Promise<IServiceData> => {
  let context:IServiceData = {
    isServer: isServer(),
    auth: false,
    referer: ''
  }
  if(isServer()){
    if(auth){
      context.auth = true
    }
    await EVENTS.set(context)
    return context;
  }else{
    context = await EVENTS.get();
    context.isServer = false;
    return context;
  }
}