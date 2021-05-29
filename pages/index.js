import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ismaillist | Home</title>
        <meta name="keywords" content="Ismail" />
      </Head>
      <div>
        <h2 className={styles.title}>Home</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi iste, repellat quis eius quo ex quod ullam cupiditate quae quia pariatur ad deleniti dicta obcaecati doloribus quibusdam sed. Aliquid et fugit maiores numquam corporis, in porro aspernatur error! Cumque.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi iste, repellat quis eius quo ex quod ullam cupiditate quae quia pariatur ad deleniti dicta obcaecati doloribus quibusdam sed. Aliquid et fugit maiores numquam corporis, in porro aspernatur error! Cumque.</p>
        <Link href="/Ismail/Ismaillist"><a className={styles.btn}>Listing</a></Link>
      </div>
    </>
  )
}
