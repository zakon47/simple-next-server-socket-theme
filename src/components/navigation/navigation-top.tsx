import React, { FC } from 'react';
import styled from './index.module.scss';
import { useColorMode } from 'theme-ui';
import MyButton from '../button/my-button';
import Link from 'next/link';

interface Props{
}

const NavigationTop:FC<Props> = (props) => {
  const {children, ...nextProps} = props;
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div className={styled.wrap}>
      <div className={styled.left}>
        <Link href="/">
          <a>3AK</a>
        </Link>
        <Link href="/ui">
          <a>UI</a>
        </Link>
        <Link href="/pricing">
          <a>PRICING</a>
        </Link>
        <Link href="/signup">
          <a>SIGNUP</a>
        </Link>
        <Link href="/poligon">
          <a>POLIGON</a>
        </Link>
        <Link href="/redirect">
          <a>Redirect</a>
        </Link>
      </div>
      <div className={styled.center}>
        {/*center*/}
      </div>
      <div className={styled.right}>
        <MyButton
          onClick={()=> setColorMode(colorMode == 'default' ? 'dart' : 'default')}
        >{colorMode == 'default' ? 'dart' : 'default'}
        </MyButton>
      </div>
    </div>
  );
};

export default NavigationTop;