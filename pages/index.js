import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>megarohas demos</title>
        <meta
          name="description"
          content="Project for demonstration of few npm packages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
