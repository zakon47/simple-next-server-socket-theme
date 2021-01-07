import React, { FC } from 'react';
import styles from './index.module.scss'
import ClassName from 'classnames';
import NavigationTop from '../../src/components/navigation/navigation-top';

interface IProps {

}

const LayoutMain: FC<IProps> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <NavigationTop/>
      </div>
      <div className={styles.padding}/>
      <div className={styles.body}>
        <div className={ClassName("fx",styles.content)} >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;