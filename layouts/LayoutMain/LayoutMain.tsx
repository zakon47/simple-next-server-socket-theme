import React, { FC, useContext } from 'react';
import styles from './index.module.scss'
import ClassName from 'classnames';
import NavigationTop from '../../src/components/navigation/navigation-top';
import { mainContext } from '../../src/context/mainContext/mainContext';
import SpinnerMax from '../../src/components/UI/SpinnerMax/SpinnerMax';

interface IProps {}

const LayoutMain: FC<IProps> = (props) => {
  const {state} = useContext(mainContext)
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <NavigationTop AUTH={state.AUTH}/>
      </div>
      <div className={styles.padding}/>
      <div className={styles.body}>
        <div className={ClassName("fx",styles.content)} >
          {state.AUTH.isLoadingPage ? (
            <SpinnerMax/>
          ): (
            props.children
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;