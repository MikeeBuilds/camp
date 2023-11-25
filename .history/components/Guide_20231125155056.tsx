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
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide you through the easy path</h2>
          <p className='regualr-16 text-gray-30 xl:max-w-[520px]'>
            Only with the Hilink App. you will no longer get lost again. because we
            already support offline maps when there is no internet connection in the filed.
            Invite you friends and relatives to have fun in the wilderness through the valley, 
            and reach the top of the mointain
          </p>
        </div>
      </div> 

      <div className='flexCenter max-container relative w-full border-2 border-blue-500'>
          <Image
            src="/boat.png"
            alt='boat'
            width={1440}
            height={580}
            className='w-full object-cover object-center 2xl:rounded-5xl'
          />

          <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
            <div className='flexBetween flex-col'>
              <div className='flex w-full flex-col'>
                  <div className='flexBetween w-full'>
                    <p className='regular-16 ext-gray-20 '>Destination</p>
                    <p className='bold-16 text-green-50'>48 min</p>
                    <p>Black Mesa State Park & Nature Preserve</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    )
}

export default Guide