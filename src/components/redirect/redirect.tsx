import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';
import { mainContext } from '../../context/mainContext/mainContext';
import styled from './index.module.scss';
import { isObject } from '../../utils/alias';

interface IProps {
  href: string
  children: ReactNode
}

const prefixLocalStorage = "ui_"
/*
Create a Redirect component with record in mainContext
 */
const Redirect = (props: IProps) => {
  const Route = useRouter()
  const {state, setState} = useContext(mainContext)
  const handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem(`${prefixLocalStorage}redirect`, props.href)
    setState({...state, redirect: props.href})
    Route.push(props.href)
  }
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
