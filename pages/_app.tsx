import { AppProps } from "next/app";
import '../src/assets/scss/global.scss';
import '../src/assets/scss/sprite/sprite-color.scss';

import { ThemeProvider } from "theme-ui";
import theme from "../src/theme-ui";
import MainContext, { mainContext } from '../src/context/mainContext/mainContext';
import { NextPageContext } from 'next';
import Router from 'next/router';

export interface MainIProps {
  isServer: boolean
  auth: boolean
}

export interface MainNextPageContext extends NextPageContext{
  isServer: boolean
  redirect: (path: string)=>void
  auth: boolean
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainContext>
        <mainContext.Consumer>
          {(myContext)=>{
            if(pageProps.isServer && myContext.state.ctx.auth === null){
              myContext.state.ctx.auth = pageProps.auth;
            }{
              pageProps.auth = myContext.state.ctx.auth;
            }
            myContext.state.ctx.isServer = pageProps.isServer
            const auth = pageProps.isServer ? pageProps.auth: myContext.state.ctx.auth;
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
  const redirect = (path: string)=>{
    ctx.isServer
      ? ctx.res.writeHead(302, { Location: path }).end()
      : Router.push(path)
    return;
  }
  ctx = { ...ctx,
    isServer: typeof window === 'undefined',
    auth: false,
    redirect
  }
  if(ctx.isServer){
    // console.log('REQUEST')
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