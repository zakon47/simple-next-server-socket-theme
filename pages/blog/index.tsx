import LayoutMain from 'layouts/LayoutMain/LayoutMain';
import Link from 'next/dist/client/link';
import {useRouter} from 'next/router';
import React from 'react';
import data from '../../src/data.json';
import {MainIProps} from "../_app";

interface IProps extends MainIProps {
}

const BlogId: React.FC<IProps> = ({children, auth}) => {
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