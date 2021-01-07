import React, { FC } from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import FormSignup from '../src/components/forms/form-signup/form-signup';

type Element = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

interface IProps {
  comments: Array<Element>
}

const Index = (props: IProps) => {
  const {comments} = props;
  return (
    <LayoutMain>
      <FormSignup/>

      <div>НАЙДЕНО: {comments.length} <small>записей</small></div>
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
Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const json = await res.json();
  return {
    comments: json || []
  }
}
export default Index;