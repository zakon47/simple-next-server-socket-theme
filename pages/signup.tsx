import React, { FC } from "react";
import MyButton from '../src/components/button/my-button';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';

export const Home: FC = () => {
  return (
    <LayoutMain>
      <MyButton label="презаголовок">Продолжение</MyButton>
    </LayoutMain>
  );
};

export default Home;
