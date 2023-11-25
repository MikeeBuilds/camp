import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='border-2 border-red-500 max=container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />

      {/* LEFT SIDE */}

      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src="/camp.svg"
          alt='camp'
          height={50}
          width={50}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />

        <h1 className='bold-52 lg:bold-88'>
          Great Places to Camp in Oklahoma
        </h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Embark on every Oklahoma adventure with us, discovering the untamed beauty of nature. 
          Experience the wonders of our state's diverse landscapes—all in one app.
        </p>
        <div className='my-11 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1)}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero