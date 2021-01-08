import Head from 'next/head'
import LayoutDefault, {siteTitle } from '../layouts/LayoutDefault/LayoutDefault'
import { getSortedPostsData } from '../src/lib/posts'
import Link from 'next/link'
import Date from '../src/components/date'

export default function Home({ allPostsData }) {
  return (
    <LayoutDefault home>
      <Head>
        <title>{siteTitle}!</title>
      </Head>
      <section>
        <h2>Привет</h2>
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
    </LayoutDefault>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
