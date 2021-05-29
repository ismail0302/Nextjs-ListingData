import React from 'react'
import Link from 'next/Link'
import Image from 'next/Image'
function Header() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" alt="logo" width="77" height="77" />
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/Ismail"><a>Ismail listing</a></Link>
            </nav>
        </div>
    )
}

export default Header
