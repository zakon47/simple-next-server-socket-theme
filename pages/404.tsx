import Head from "next/head";
import LayoutDefault, { siteTitle } from '../layouts/LayoutDefault/LayoutDefault';

export default function Error() {
  return (
    <LayoutDefault home>
      <Head>
        <title>{siteTitle}!</title>
      </Head>
      <h1>404</h1>
    </LayoutDefault>
  )
}
