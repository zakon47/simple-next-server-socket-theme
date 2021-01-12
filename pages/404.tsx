import Head from "next/head";
import { siteTitle } from '../layouts/LayoutDefault/LayoutDefault';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';

export default function Error() {
  return (
    <LayoutMain>
      <Head>
        <title>{siteTitle}!</title>
      </Head>
      <h1>404!!</h1>
    </LayoutMain>
  )
}
