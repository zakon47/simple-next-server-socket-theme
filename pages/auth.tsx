import Head from 'next/head'
import React, {useContext, useMemo, useRef} from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import {mainContext} from '../src/context/mainContext/mainContext';
import {EVENTS} from "../src/context/events";
import {initialize} from "./_app";

interface IProps{
  auth: boolean
  isServer: boolean
  list: Array<number>
}

const Auth = (props:IProps) => {
  const {state, setAuth} = useContext(mainContext)
  const {list} = props;
  console.log(44, state.ctx, props)
  const BUTTON = () => {
    EVENTS.setAuth(!state.ctx.auth)
    // defaultContext.auth = !defaultContext.auth
    // setAuth(!state.ctx.auth);
  }
  const auth = useMemo(()=>{
    return state.ctx.auth
  },[state.ctx.auth])
  const isServer = useMemo(()=>{
    return state.ctx.isServer
  },[state.ctx.isServer])
  return (
    <LayoutMain>
      <Head>
        <title>POLIGON!</title>
      </Head>
      <div>
        <h1>POLIGON = isServer({isServer ? "TRUE" : "FALSE"}) {auth ? "TRUE" : "FALSE"}</h1>
        <div>{auth && "secret"}</div>
        <div>more</div>
        {list && (
          <ul>
            {list.map(elem=><li key={elem}>{elem}</li>)}
          </ul>
        )}
        <button onClick={BUTTON}>{state.ctx.auth ? "HIDE" : "SHOW"}</button>
      </div>
    </LayoutMain>
  )
}
export default Auth;

Auth.getInitialProps = async (ctx) => {
  const {auth, isServer} = await initialize(ctx)
  console.log(222222222, ctx, auth, isServer)
  return {
    auth, isServer,
    list: [1,2,3,4777]
  }
}