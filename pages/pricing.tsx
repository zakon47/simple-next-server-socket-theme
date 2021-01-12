import React, { useContext } from "react";
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import { mainContext } from '../src/context/mainContext/mainContext';
import withAuth from '../src/HOC/withAuth';

function Home({ctx}){
  const {state, singIn} = useContext(mainContext);
  console.log('getInitialProps2', ctx)
  return (
    <LayoutMain>
      <section>
        <div className="container">
          <h1>Pricing</h1>
          <b>STATE: {JSON.stringify(state, null, 2)}</b>
          {Array(20).map((elem,idx)=>(<li key={idx}>{idx}</li>))}
        </div>
      </section>
    </LayoutMain>
  );
};
export default withAuth(Home);

// Home.getInitialProps = () => {
//   console.log('getInitialProps')
//   return {}
// }
// export async function getServerSideProps(context){
//   console.log('getInitialProps!')
//   return {
//     props:{
//       ctx: context.query
//     }
//   }
// }