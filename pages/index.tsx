import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getStaticProps } from "../lib/vikings";

export default function Home() {
  getStaticProps();
  return (
    <div className={styles.container}>
      <Head>
        <title>Local Host</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
