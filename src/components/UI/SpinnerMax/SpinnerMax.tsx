import React from 'react';
import styled from './SpinnerMax.module.scss'
import { IconX } from '../Icon/IconX';
import ClassName from 'classnames';

interface IProps {
    className?:string
}

const SpinnerMax:React.FC<IProps> = ({children,className}) => {
    return (
        <div className={ClassName(styled.Spinner, className)}>
            <IconX name='icon_close' className='InitializeApp__lock'/>
            <div className={ClassName(styled.SpinnerCircle, styled.SpinnerCircleOuter)}/>
            <div className={ClassName("Spinner-circle-off", styled.SpinnerCircleInner)}/>
            <div className={ClassName(styled.SpinnerCircle, styled.SpinnerCircleSingle1)}/>
            <div className={ClassName(styled.SpinnerCircle, styled.SpinnerCircleSingle2)}/>
        </div>
    );
};

export default SpinnerMax;