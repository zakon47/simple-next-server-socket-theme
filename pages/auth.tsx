import React, { useContext } from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import TestComponent from '../src/components/TestConmonent';
import { mainContext } from '../src/context/mainContext/mainContext';
import { MainProps, MainNextPageContext } from './_app';

interface IProps extends MainProps{

}

const Auth = (props: IProps) => {
  const {state, setAuth} = useContext(mainContext)
  const BUTTON = () => {
    setAuth(!state.AUTH.auth);
  }
  return (
    <LayoutMain >
      <Head>
        <title>CheckAuth</title>
      </Head>
      <div>
        {state.AUTH.auth ? "SECRET SHOW" : "REGISTER!"}
        <TestComponent {...props}/>
        <button onClick={BUTTON} style={{color: 'black'}}>{state.AUTH.auth ? "HIDE" : "SHOW"}</button>
        <hr/>
        <div>STATE: <pre>{JSON.stringify(state, null, 2)}</pre></div>
      </div>
    </LayoutMain>
  );
};

export default Auth;


Auth.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}
