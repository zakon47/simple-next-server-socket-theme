import React, {useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import Redirect from 'src/components/redirect/redirect';
import {initialize} from "./_app";

interface IProps {
    auth: boolean
}

const RedirectPage = (props: IProps) => {
    return (
        <LayoutMain>
            <Head>
                <title>Poligon2</title>
            </Head>
            {props.auth ? (
                <div>Secret CONTENT!</div>
            ) : (
                <div>
                    <h1>Вам нужно зарегистрироваться!</h1>
                    {/*<div>*/}
                    {/*  <Redirect href="/signup" >*/}
                    {/*    xaxaxa*/}
                    {/*  </Redirect>*/}
                    {/*</div>*/}
                    <div>
                        <Redirect href='/login'>
                            <a><span>Зарегистрироваться</span></a>
                        </Redirect>
                    </div>
                    {/*<div>*/}
                    {/*  <Redirect href="/login222">*/}
                    {/*    <span>Зарегистрироваться</span>*/}
                    {/*  </Redirect>*/}
                    {/*</div>*/}
                    <Link href='/login'>
                        <b>dsd</b>
                    </Link>
                </div>
            )}
        </LayoutMain>
    );
};

export default RedirectPage;

// RedirectPage.getInitialProps = async (ctx: MainNextPageContext) => {
//   return {ctx}
// }

RedirectPage.getInitialProps = async (ctx) => {
    const {auth, isServer} = await initialize(ctx);
    console.log(88,auth, isServer)
    return {auth, isServer}
}