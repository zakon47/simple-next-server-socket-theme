import React from 'react';
import styled from './iconx.module.scss';
import ClassName from 'classnames';

let SVG = '/assets/_sprites/sprite-icon.svg';

interface IProps {
  name: string
  size?: 'default'|'big'
  className?: string
}

const IconX: React.FC<IProps> = ({name, className, size = 'default'}) => {
  return (
    <svg className={ClassName("IconX", className, `svg-${name}-dims`, `svg-${name}`, styled.svg, styled[size])}
         viewBox="0 0 24 24"
         role="presentation"
         aria-hidden="true"
         focusable="false"
         xmlns={`${SVG}#${name}`} xmlnsXlink={`${SVG}#${name}`}
    >
      <use xlinkHref={`${SVG}#${name}`}/>
    </svg>
  );
};

export { IconX };