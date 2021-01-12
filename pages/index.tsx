import React, { useContext } from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import FormSignup from '../src/components/forms/form-signup/form-signup';
import { maps } from '../test/test';
import { mainContext } from '../src/context/mainContext/mainContext';

type Element = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface IProps {
  comments: Array<Element>
  maps: typeof maps;
}

const Index = (props: IProps) => {
  const {state, singIn} = useContext(mainContext);
  const {comments = [], maps} = props;
  return (
    <LayoutMain>
      <FormSignup/>

      <div>НАЙДЕНО: {comments.length} <small>записей</small></div>
      <div>maps: {JSON.stringify(maps, null, 2)}</div>
      <b>STATE: {JSON.stringify(state, null, 2)}</b>
      <button onClick={singIn}>ADD</button>
      <hr/>
      {comments && comments.map(elem => (
        <div key={elem.id} style={{marginBottom:20}}>
          <b>{elem.name}</b> - [{elem.email}]
          <div>{elem.body}</div>
        </div>
      ))}
    </LayoutMain>
  );
};
export default Index;

Index.getInitialProps = (ctx) => {
  return {
    comments: [],
    maps: {}
  }
}