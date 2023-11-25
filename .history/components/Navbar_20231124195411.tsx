import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container
    padding-container relative z-30 py-5'>
        <Link href="/">
            <Image 
                src="/hilink-logo.svg"
                alt='logo'
                width={74}
                height={29}
            />
            <ul className=''>

            </ul>
        </Link>
    </nav>
  )
}

export default Navbar