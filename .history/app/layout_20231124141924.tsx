import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


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
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        {/* Other global head elements can be added here */}
      </Head>
      <body className="">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
