import React from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainNextPageContext, MainProps } from './_app';
import { IconX } from '../src/components/UI/Icon/IconX';
import { IconXColor } from '../src/components/UI/Icon/IconXColor';
import { IconXPng } from '../src/components/UI/Icon/IconXPng';
import SpinnerMax from '../src/components/UI/SpinnerMax/SpinnerMax';

interface IProps extends MainProps {

}

const Spinner = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Spinner</title>
      </Head>
      <h1>Spinner</h1>
      <SpinnerMax/>
    </LayoutMain>
  );
};

export default Spinner;

Spinner.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}
