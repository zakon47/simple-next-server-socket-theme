import {useRouter} from 'next/router';
import React, {ReactNode} from 'react';
import ClassName from 'classnames';
import Link from 'next/link';

interface IProps {
    children: ReactNode
    href: string
}

/*
create own link with ACTIVE class
 */
const MyLink: React.FC<IProps> = ({children, href}) => {
    const router = useRouter();
    if (!React.isValidElement(children)) {
        return null
    }
    return (
        <Link href={href}>
            {React.cloneElement(children, {
                className: ClassName(children.props.className, {"-selected": href.toLocaleLowerCase() == router.pathname})
            })}
        </Link>
    );
};

export default MyLink;