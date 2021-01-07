import React, { FC } from "react";
import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault';
import MyButton from '../src/components/button/my-button';

export const Home: FC = () => {
  return (
    <LayoutDefault home>
      <MyButton label="презаголовок">Продолжение</MyButton>
    </LayoutDefault>
  );
};

export default Home;
