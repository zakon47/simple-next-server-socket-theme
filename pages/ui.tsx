import Head from 'next/head'
import {siteTitle } from '../layouts/LayoutDefault/LayoutDefault'
import Link from 'next/link'
import Date from '../src/components/date'
import { maps } from '../test/test';
import React from 'react';
import LayoutMain from '../layouts/LayoutMain/LayoutMain';
import withAuth from '../src/HOC/withAuth';

interface IProps {
  allPostsData: Array<any>
  maps: typeof maps;
}
const Ui = (props: IProps) => {
  const {allPostsData, maps} = props;
  return (
    <LayoutMain>
      <Head>
        <title>{siteTitle}!</title>
      </Head>
      <section>
        <h2>Привет</h2>
        <div>maps: {JSON.stringify(maps, null, 2)}</div>
        <ul className='zakosha'>
          <li>Lorem ipsum dolor sit amet.</li>
          <li className='-active'>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2 >Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small >
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </LayoutMain>
  )
}
export default withAuth(Ui);

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData()
  if(maps['ui']===undefined){
    maps['ui'] = 0;
  }else{
    maps['ui'] += 1;
  }
  console.log(111, maps)
  return {
    props:{
      allPostsData: [],
      maps,
    }
  }
}