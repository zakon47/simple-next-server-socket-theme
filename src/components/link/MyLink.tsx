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
    const curPath = router.asPath.toLocaleLowerCase()
    const hrefPath = href.toLocaleLowerCase()
    let isSelected = false
    if(hrefPath.length > 1 && curPath.length >= hrefPath.length && hrefPath===curPath.substring(0, hrefPath.length)){
        isSelected = true
    }
    return (
        <Link href={hrefPath}>
            {React.cloneElement(children, {
                className: ClassName(children.props.className, {"-selected": isSelected})
            })}
        </Link>
    );
};

export default MyLink;