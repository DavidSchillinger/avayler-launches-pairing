import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Avayler Launches</title>
        <meta name="description" content="Avayler Coding Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </Fragment>
  );
}
