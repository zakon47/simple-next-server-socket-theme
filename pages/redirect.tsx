import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainIProps, MainNextPageContext } from './_app';
import Head from 'next/head';
import Link from 'next/link';
import Redirect from '../src/components/redirect/redirect';

interface IProps extends MainIProps{
}

const RedirectPage = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Poligon2</title>
      </Head>
      {props.auth ? (
        <div>Secret CONTENT!</div>
      ): (
        <div>
          <h1>Вам нужно зарегистрироваться!</h1>
          <div>
            <Redirect href="/signup">
              xaxaxa
            </Redirect>
          </div>
          <div>
            <Redirect href="/login">
              <a><span>Зарегистрироваться</span></a>
            </Redirect>
          </div>
          <div>
            <Redirect href="/login222">
              <span>Зарегистрироваться</span>
            </Redirect>
          </div>
          <Link href="/login">
            <b>dsd</b>
          </Link>
        </div>
      )}
    </LayoutMain>
  );
};

export default RedirectPage;

RedirectPage.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}