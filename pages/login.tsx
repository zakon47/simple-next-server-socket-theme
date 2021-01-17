import React from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import FormSignup from '../src/components/forms/form-signup/form-signup';
import { MainNextPageContext, MainProps } from './_app';

interface IProps extends MainProps{

}

const Login = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Login</title>
      </Head>
      <div>
        {!props.AUTH.auth && (
          <FormSignup/>
        )}
      </div>
    </LayoutMain>
  );
};

export default Login;

