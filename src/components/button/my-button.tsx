import React, { FC } from 'react';
import styled from './index.module.scss';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label?: string
}

const MyButton: FC<Props> = (props) => {
  const {children, label, ...nextProps} = props;
  return (
    <button {...nextProps} className={styled.main}>
      {label ? (
        `${label}: ${children}`
      ) : (

        `${children}`
      )}
    </button>
  );
};

export default MyButton;