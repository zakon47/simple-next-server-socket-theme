import React from 'react';
import styled from './iconx.module.scss';
import ClassName from 'classnames';

interface IProps {
  name: string
  size?: 'default'|'big'
  className?: string
}

const IconXPng: React.FC<IProps> = ({name, className, size = 'default'}) => {
  return (
    <div className={ClassName("IconXPng", className, `icon-${name}`, styled.displayInline)}/>
  );
};

export { IconXPng };