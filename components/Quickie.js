import React from 'react'
import { BsEnvelope, BsGeoAlt, BsArrowRightShort } from 'react-icons/bs'

const Quickie = () => {
  return (
    <div className='lg:flex items-start flex-row px-8 py-6 md:py-12 lg:px-28 justify-between'>
      <div className='flex items-center lg:justify-center flex-row mb-4'>
        <div className='rounded-full h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center border border-opacity-25 border-secondary bg-secondary'>
          <BsEnvelope className='text-sm lg:text-base font-light text-white' />
        </div>
        <div className='flex flex-col ml-4'>
          <h2 className='text-sm lg:text-base text-black text-bold capitalize mb-2'>
            quick contact
          </h2>
          <div className='flex flex-row items-center'>
            <p className='text-gray-300 text-xs mr-2 capitalize '>email</p>
            <a
              href='mailto:Info@dantata-sawoe.com'
              className='text-gray-300 text-xs'
            >
              Info@dantata-sawoe.com
            </a>
          </div>
          <div className='flex flex-row items-center'>
            <p className='text-gray-300 text-xs mr-2 capitalize '>phone</p>
            <a href='tel:+2349055519823' className='text-gray-300 text-xs'>
              +2349055519823
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center lg:justify-center flex-row mb-4'>
        <div className='rounded-full h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center border border-opacity-25 border-secondary bg-secondary'>
          <BsGeoAlt className='text-sm lg:text-base font-light text-white' />
        </div>
        <div className='flex flex-col ml-4'>
          <h2 className='text-sm lg:text-base text-black text-bold capitalize mb-2'>
            our location
          </h2>
          <div className='flex flex-row items-center'>
            <p className='text-gray-300 text-xs mr-2 capitalize '>
              Nnamdi Azikiwe Way, P.O.Box 3858, Garki,
              <br /> Abuja Nigeria.
            </p>
          </div>
        </div>
      </div>
      <div className='flex border border-secondary pl-6 py-12 lg:py-6 flex-col bg-secondary rounded-sm lg:-mt-28 z-40 mt-16'>
        <h3 className='text-white text-base mb-4 capitalize w-4/5'>
          a leading developer of A-Grade
          <br /> commercial & residential projects
        </h3>
        <p className='text-gray-300 text-sm mb-4 lg:w-3/5 w-11/12'>
          Today, Dantata & Sawoe has over 6,000 professionals on its payroll All
          over Africa.
        </p>
        <div className='flex items-center'>
          <p className='text-white text-sm capitalize'>learn more</p>
          <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-white ml-2'>
            <BsArrowRightShort className='text-base font-light text-secondary' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quickie
