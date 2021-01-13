import React from 'react';

// let SVG = '/assets/svg-sprite/sprite-color.svg';
let SVG = '/assets/_sprites/sprite-color.svg';

interface IProps {
  name: string
  className?: string
  size?: "large" | "small"
  style?: { [index: string]: any }
}

const IconXColor: React.FC<IProps> = ({
                                        name,
                                        className,
                                        style,
                                        size,
                                      }) => {
  let cls = ['Icon', `svg-${name}`, `svg-${name}-dims`];
  if (className) cls.push(className);
  // shape-rendering="crispEdges"
  return (
    <svg className={cls.join(' ')}  {...style} role="presentation" aria-hidden="true" focusable="false">
      <use xlinkHref={`#${SVG}#${name}`} />
    </svg>
  );
  return (
    <svg className={cls.join(' ')} {...style} role="presentation" aria-hidden="true" focusable="false"
         xmlns={`${SVG}#${name}`} xmlnsXlink={`${SVG}#${name}`}>
      <use xlinkHref={`${SVG}#${name}`}/>
    </svg>
  );
};

export { IconXColor };