import {useRouter} from 'next/router';
import React, { ReactNode, useContext } from 'react';
import ClassName from 'classnames';
import Link from 'next/link';
import { mainContext } from '../../context/mainContext/mainContext';


interface IProps {
    children: ReactNode
    href: string
}

/*
create own link with ACTIVE class
 */
const MyLink: React.FC<IProps> = ({children, href}) => {
    const {setIsLoading, setReferer} = useContext(mainContext)
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
    const handleClick = (e) => {
        setIsLoading(true);
        setReferer(curPath);
    }
    return (
        <Link href={hrefPath}>
            {React.cloneElement(children, {
                className: ClassName(children.props.className, {"-selected": isSelected}),
                onClick:handleClick
            })}
        </Link>
    );
};

export default MyLink;