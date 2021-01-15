import React from 'react';
import styled from './iconx.module.scss';
import ClassName from 'classnames';
// import SVG from "../../../assets/svg-sprite/sprite.svg";

let SVG = '/assets/_sprites/sprite-icon.svg';
interface IProps {
    name: string
    className?: string
}
const IconX:React.FC<IProps> = ({name, className,}) => {
    return (
      <svg className={ClassName(className, `svg-${name}-dims`,`svg-${name}`, styled.svg)} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" xmlns={`${SVG}#${name}`} xmlnsXlink={`${SVG}#${name}`}>
          <use xlinkHref={`${SVG}#${name}`}/>
      </svg>
    );
};

export {IconX};