import styles from '../../styles/IsmailStyle.module.css';
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { IsmailProps: data }
    }
}
function Ismaillist({ IsmailProps }) {
    return (
        <>
            <Head>
                <title>Ismaillist | Fulllist</title>
                <meta name="keywords" content="Ismail" />
            </Head>
            <div>
                <h3>All Ismail listing are here.</h3>
                {IsmailProps.map(Ismailpr => (
                    <Link href={'/Ismail/' + Ismailpr.id} key={Ismailpr.id}>
                        <a className={styles.single}>
                            <h3>{Ismailpr.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Ismaillist
