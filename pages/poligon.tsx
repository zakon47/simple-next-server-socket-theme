import React, { useContext } from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import TestComponent from '../src/components/TestConmonent';
import { initialize } from './_app';
import { EVENTS, IServiceData } from '../src/context/events';
import { mainContext } from '../src/context/mainContext/mainContext';

interface IProps extends IServiceData{

}

const Poligon = (props: IProps) => {
  const {state} = useContext(mainContext)
  console.log('props 1', props, state.ctx, EVENTS.get())
  return (
    <LayoutMain>
      <Head>
        <title>Poligon</title>
      </Head>
      <div>
        HELLO!
        <TestComponent {...props}/>
      </div>
    </LayoutMain>
  );
};

export default Poligon;


Poligon.getInitialProps = async (ctx) => {
  let INIT = await initialize(ctx, true)
  console.log('getInitialProps 1', INIT)
  return {...INIT}
}
