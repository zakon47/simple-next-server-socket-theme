import React, { FC, useContext } from 'react';
import styles from './index.module.scss'
import ClassName from 'classnames';
import NavigationTop from '../../src/components/navigation/navigation-top';
import { mainContext } from '../../src/context/mainContext/mainContext';

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
            <div>Loading...</div>
          ): (
            props.children
          )}
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;