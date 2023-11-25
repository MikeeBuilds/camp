import { FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex-center mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link
            href="/"
            className='mb-10'
          >
            <Image
              src="hilink-logo.svg"
              alt='logo'
              width={74}
              height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}


const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer