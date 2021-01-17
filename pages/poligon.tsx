import React from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import TestComponent from '../src/components/TestConmonent';

interface IProps {

}

const Poligon = (props: IProps) => {
  console.log('props 1', props)
  return (
    <LayoutMain>
      <Head>
        <title>Poligon</title>
      </Head>
      <div>
        HELLO!
        <TestComponent/>
      </div>
    </LayoutMain>
  );
};

export default Poligon;


Poligon.getInitialProps = async (ctx) => {
  console.log('getInitialProps 1', ctx)
  return {}
}
