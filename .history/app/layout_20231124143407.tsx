import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'


export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* other head elements */}
      </Head>
      <body className="">
        <Navbar/>
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
