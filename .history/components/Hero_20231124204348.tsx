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

          <h1>
          Beavers Bend State Park – Broken Bow
          </h1>
      </div>
    </section>
  )
}

export default Hero