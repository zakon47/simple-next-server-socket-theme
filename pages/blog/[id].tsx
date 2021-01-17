import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { MainNextPageContext, MainProps } from '../_app';
import MyLink from '../../src/components/link/MyLink';
import { mainContext } from '../../src/context/mainContext/mainContext';

type data = {
  userId: 1,
  id: 2,
  title: "qui est esse",
  body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
}

interface IProps extends MainProps {
  post: data
}

const BlogId = (props: IProps) => {
  const {state} = useContext(mainContext)
  // const router = useRouter()
  return (
    <LayoutMain>
      <h1>
        {props.post.title}
      </h1>
      <br/>
      <div>{props.post.body}</div>
      <hr/>
      <MyLink href={"/blog"}>
        <a>Назад</a>
      </MyLink>
    </LayoutMain>
  );
};

export default BlogId;

BlogId.getInitialProps = async (ctx: MainNextPageContext) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.query.id}`)
  const post = await data.json()
  return {
    post
  }
}