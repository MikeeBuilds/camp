import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='border-2 border-red-500 padding-container max-container 
      w-full pb-24'>
        <Image
          src="/camp.svg"
          alt='camp'
          width={50}
          height={50}
        />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>
        <div className='flex flex-wrap just'>

        </div>
      </div> 
    </section>
    )
}

export default Guide