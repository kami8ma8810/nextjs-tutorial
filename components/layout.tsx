// import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'カミヤマ ハヤト';
export const siteTitle = 'Next.js Tutorial Website';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          // TOPページ
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={`${utilStyles.heading2Xl} ${utilStyles.noise}`}>{name}</h1>
          </>
        ) : (
          // 下層ページ
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← 戻る</Link>
        </div>
      )}
      <p className={utilStyles.marginTop2em}>
        参考：
        <cite>
          <a href='https://github.com/vercel/next-learn/tree/master/basics/typescript-final'>
            https://github.com/vercel/next-learn/tree/master/basics/typescript-final
          </a>
        </cite>
      </p>
    </div>
  );
}
