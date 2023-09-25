import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import punycode from "punycode";
import EmojiInput from "../components/EmojiInput";

export default function Home() {
  let encoded = punycode.toASCII("😀");
  let decoded = punycode.toUnicode(encoded);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to 🐶💩.stark!</h1>

        <p className={styles.description}>
          <code className={styles.code}>EmoJNS (Emoji Name Service)</code>
        </p>
        <div>
          <EmojiInput />
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
