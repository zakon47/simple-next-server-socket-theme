import React from 'react';
import ClassName from 'classnames';
let SVG = '/assets/_sprites/sprite-color.svg';

interface IProps {
  name: string
  className?: string
}

const IconXColor: React.FC<IProps> = ({
                                        name,
                                        className,
                                      }) => {
  return (
    <svg className={ClassName("IconXColor", className, `svg-${name}`, `svg-${name}-dims`)}
         role="presentation"
         aria-hidden="true"
         focusable="false"
    >
      <use xlinkHref={`#${SVG}#${name}`} />
    </svg>
  );
};

export { IconXColor };