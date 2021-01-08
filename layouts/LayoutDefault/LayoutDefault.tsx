import Head from 'next/head'
import React, { FC } from "react";
import styles from './index.module.scss'
import Link from 'next/link'
import { Header } from '../../src/components/Header';

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

interface Props {
  home?
}
const LayoutDefault: FC<Props> = ({ children, home }) => {
  console.log('home', home)
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          {/*<meta*/}
          {/*  property="og:image"*/}
          {/*  content={`https://og-image.now.sh/${encodeURI(*/}
          {/*    siteTitle*/}
          {/*  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}*/}
          {/*/>*/}
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <a >{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default LayoutDefault