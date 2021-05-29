import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
function NotFound() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            //   router.got(-1)
            router.push('/')
        }, 4000)
    }, [])
    return (
        <>
            <Head>
                <title>Ismaillist | Not-found</title>
                <meta name="keywords" content="Ismail" />
            </Head>
            <div className="not-found">
                <h1>Ooops....</h1>
                <h2>That page can't be found</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    )
}

export default NotFound
