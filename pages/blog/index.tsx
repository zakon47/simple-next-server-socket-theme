import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import Link from 'next/dist/client/link';
import {useRouter} from 'next/router';
import React from 'react';
import data from '../../src/data.json';
import {initialize} from "../_app";

interface IProps {
    auth:boolean
}

const BlogId = ({children, auth}) => {
    const route = useRouter();

    return (
        <LayoutMain>
            {Object.keys(data).map(key => {
                const elem = data[key];
                return (
                    <div key={key}>
                        <Link href={`/blog/${key}`}>
                            <a>{elem.title}</a>
                        </Link>
                    </div>
                )
            })}
        </LayoutMain>
    );
};

export default BlogId;

BlogId.getInitialProps = async (ctx) => {
    const {auth} = await initialize(ctx)
    return {
        auth
    }
}