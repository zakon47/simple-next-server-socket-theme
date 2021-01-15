import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import data from '../../src/data.json';
import {MainIProps} from "../_app";

interface IProps extends MainIProps{}

const BlogId:React.FC<IProps> = ({children, auth}) => {
    const route = useRouter();
    const post = data[route.query.id as string];

    console.log(22, post, route.query, auth);
    // if(!post) return <p>bbbb</p>

    return (
        <LayoutMain>
           <div>
               {post.title}
           </div>
            <div style={{height: 2000}}></div>
            <Link href='/404' prefetch={false}>
                <a>404</a>
            </Link>
            <Link href='/test' prefetch={false}>
                <a>Test</a>
            </Link>
        </LayoutMain>
    );
};

export default BlogId;