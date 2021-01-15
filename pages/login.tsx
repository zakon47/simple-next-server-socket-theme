import React from 'react';
import { MainIProps, MainNextPageContext } from './_app';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import FormSignup from '../src/components/forms/form-signup/form-signup';

interface IProps extends MainIProps {

}

const Login = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        <FormSignup/>
      </div>
    </LayoutMain>
  );
};

export default Login;


Login.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}
