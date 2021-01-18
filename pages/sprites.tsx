import React from 'react';
import Head from "next/head";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { MainNextPageContext, MainProps } from './_app';
import { IconX } from '../src/components/UI/Icon/IconX';
import { IconXColor } from '../src/components/UI/Icon/IconXColor';
import { IconXPng } from '../src/components/UI/Icon/IconXPng';

interface IProps extends MainProps {

}

const Sprites = (props: IProps) => {
  return (
    <LayoutMain>
      <Head>
        <title>Sprites</title>
      </Head>
      <h1>SVG Icon</h1>
      <dl>
        <dd>
          <div className='small_icon'>
            <small>small</small>
            <IconX name='icon_phone'/>
            <IconX name='icon_back'/>
            <IconX name='icon_close'/>
            <IconX name='icon_img'/>
            <IconX name='icon_info'/>
          </div>
          <div>
            <big>big</big>
            <IconX className='IconX' size='big' name='icon_phone'/>
            <IconX className='IconX' size='big' name='icon_back'/>
            <IconX className='IconX' size='big' name='icon_close'/>
            <IconX className='IconX' size='big' name='icon_img'/>
            <IconX className='IconX' size='big' name='icon_info'/>
          </div>
        </dd>
      </dl>

      <br/><br/>
      <h1>SVG Color</h1>
      <dl>
        <dd>
          <IconXColor name='icon_star'/>
          <IconXColor name='icon_robot'/>
          <IconXColor name='icon_crack'/>
          <IconXColor name='icon_work'/>
          <IconXColor name='icon_star'/>
        </dd>
      </dl>

      <br/><br/>
      <h1>PNG sprite</h1>
      <dl>
        <dd>
          <IconXPng name='img1'/>
          <IconXPng name='img2'/>
          <IconXPng name='img3'/>
        </dd>
      </dl>
      <style jsx>{`
        .IconX{
          background: yellow
        }
      `}</style>
    </LayoutMain>
  );
};

export default Sprites;

Sprites.getInitialProps = async (ctx: MainNextPageContext) => {
  return {}
}
