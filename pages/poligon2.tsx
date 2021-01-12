import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainIProps, MainNextPageContext } from './_app';

interface IProps extends MainIProps{

}

const Poligon2 = (props: IProps) => {
  return (
    <LayoutMain>
      <p>auth: {props.auth ? "ОТКРЫТО" : "CLOSE!"}</p>
      <p>isServer: {props.isServer ? "Сервер" : "Переход"}</p>
    </LayoutMain>
  );
};

export default Poligon2;

Poligon2.getInitialProps = async (ctx: MainNextPageContext) => {
  console.log('ctx', ctx.auth, ctx.isServer)
  return {}
}