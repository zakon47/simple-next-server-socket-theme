import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';
import { mainContext } from '../../context/mainContext/mainContext';
import styled from './index.module.scss';
import { isObject } from '../../utils/alias';
import { prefixLocalStorage } from '../../../shared/const';
import { MainNextPageContext } from '../../../pages/_app';
import RedirectPage from '../../../pages/redirect';

interface IProps {
  href: string
  children: ReactNode
  ctx?: MainNextPageContext
}

/*
Create a Redirect component with record in mainContext
 */
const Redirect = (props: IProps) => {
  const Route = useRouter()
  const {state, setState} = useContext(mainContext)
  const handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem(`redirect`, props.href)
    console.log(222, state.ctx)
    setState({...state, redirect: props.href})
    Route.push(props.href)
  }
  console.log(11, props.ctx)
  return (
    <>
      {React.Children.map(props.children, (child, index) => {
        if (!isObject(child)) {
          return React.createElement('a', {
            onClick: handleClick,
            href: props.href,
            className: styled.link
          }, child)
        }
        if (child['type'] === 'a') {
          return React.cloneElement(child as any, {
            onClick: handleClick,
            href: props.href,
            className: styled.link
          })
        } else {
          return React.cloneElement(child as any, {
            onClick: handleClick
          })
        }
      })}
    </>
  )
};

export default Redirect;

// Redirect.getInitialProps = async (ctx: MainNextPageContext) => {
//   console.log(33, ctx)
//   return {
//     ctx
//   }
// }
Redirect.getInitialProps = (ctx) => {
  console.log(44, ctx)
  return {
  }
}