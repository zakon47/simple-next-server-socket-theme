import React from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainNextPageContext, MainProps } from './_app';

interface IProps extends MainProps {

}

const Sprites = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Sprites</title>
      </Head>
      <div>Sprites</div>
    </LayoutMain>
  );
};

export default Sprites;

Sprites.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}
