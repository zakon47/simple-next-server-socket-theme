import Head from "next/head";
import {siteTitle} from '../layouts/LayoutDefault/LayoutDefault';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import {IconX} from "../src/components/UI/Icon/IconX";

export default function Error() {
    return (
        <LayoutMain>
            <Head>
                <title>{siteTitle}!</title>
            </Head>
            <h1>404!!</h1>
            <div>
                <IconX name='icon_close'/>
            </div>
        </LayoutMain>
    )
}
