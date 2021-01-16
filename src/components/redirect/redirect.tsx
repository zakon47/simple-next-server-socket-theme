import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';
import { mainContext } from '../../context/mainContext/mainContext';
import styled from './index.module.scss';
import { isObject } from '../../utils/alias';

interface IProps {
  href: string
  children: ReactNode
  ctx?
}

/*
Create a Redirect component with record in mainContext
 */
const Redirect = (props: IProps) => {
  const route = useRouter()
  const {state, setState} = useContext(mainContext)
  const handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem('redirect', props.href)
    setState({...state, redirect: props.href})
    route.push(props.href)
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