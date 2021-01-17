import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import React from 'react';
import { MainNextPageContext, MainProps } from '../_app';
import MyLink from '../../src/components/link/MyLink';

type Element = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
}

interface IProps extends MainProps{
    posts: Array<Element>
}

const BlogId = (props:IProps) => {
    return (
        <LayoutMain>
            {props.posts.map((elem)=>{
                return (
                  <div key={elem.id}>
                      <MyLink href={`/blog/${elem.id}`}>
                          <a>{elem.id}: <b>{elem.title}</b></a>
                      </MyLink>
                  </div>
                )
            })}
        </LayoutMain>
    );
};

export default BlogId;

BlogId.getInitialProps = async (ctx:MainNextPageContext) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return {
        posts
    }
}