import Head from 'next/head'
import React, { useContext } from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainIProps, MainNextPageContext } from './_app';
import { mainContext } from '../src/context/mainContext/mainContext';

interface IProps extends MainIProps{
  list: Array<number>
}

const Auth = (props:IProps) => {
  const {state, setAuth} = useContext(mainContext)
  console.log('POLIGON', props.auth, props.auth, "===STATE====", state.ctx.auth)
  const {auth, list} = props;
  const BUTTON = () => {
    setAuth(!state.ctx.auth);
  }
  return (
    <LayoutMain>
      <Head>
        <title>POLIGON!</title>
      </Head>
      <div>
        <h1>POLIGON = isServer({props.isServer ? "TRUE" : "FALSE"}) {auth ? "TRUE" : "FALSE"}</h1>
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

Auth.getInitialProps = async (ctx:MainNextPageContext) => {
  console.log("AUTH", ctx.auth, ctx.isServer)
  return {
    name: 'zakon',
    list: [1,2,3,4777]
  }
}