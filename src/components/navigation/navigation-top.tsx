import React, { FC } from 'react';
import styled from './index.module.scss';
import {jsx, useColorMode} from 'theme-ui';
import MyButton from '../button/my-button';
import MyLink from '../link/MyLink';

interface Props{
}

const NavigationTop:FC<Props> = (props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div className={styled.wrap}>
      <div className={styled.left}>
        <MyLink href="/">
          <a>Home</a>
        </MyLink>
        <MyLink href="/auth">
          <a>Auth</a>
        </MyLink>
        <MyLink href="/blog">
          <a>Blog</a>
        </MyLink>
        <MyLink href="/redirect">
          <a>Redirect</a>
        </MyLink>
      </div>
      <style jsx>{`
        .${styled.left} .-selected{
          color:red
        }
      `}</style>
      {/*<div className={styled.center}>*/}
      {/*  center*/}
      {/*</div>*/}
      <div className={styled.right}>
        <MyLink href="/login">
          <a>Login</a>
        </MyLink>
        &nbsp;
        <MyButton
          onClick={()=> setColorMode(colorMode == 'default' ? 'dart' : 'default')}
        >{colorMode == 'default' ? 'dart' : 'default'}
        </MyButton>
      </div>
    </div>
  );
};

export default NavigationTop;