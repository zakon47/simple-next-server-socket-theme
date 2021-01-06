import React, { FC } from "react";
import { LayoutDefault } from '../layouts/layout';

export const Home: FC = () => {
  return (
    <LayoutDefault>
      <section>
        <div className="container">
          <h1>Pricing</h1>
          {Array(20).map((elem,idx)=>(<li key={idx}>{idx}</li>))}
        </div>
      </section>
    </LayoutDefault>
  );
};

export default Home;
