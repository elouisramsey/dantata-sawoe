import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const Quality = () => {
  return (
    <div className='flex flex-col px-8 py-20 md:py-36 lg:px-28 bg-gray-50'>
      <div className='flex flex-col items-center justify-center w-full'>
        {' '}
        <h2 className='lg:text-base text-xs text-secondary text-center capitalize mb-2'>
          the best a-grade commercial & residential services
        </h2>
        <h3 className='text-black text-sm lg:text-4xl mb-4 text-bold capitalize text-center w-full lg:w-3/4'>
          high quality Engineering, Construction & General contracting Company
        </h3>
      </div>
      <div className='grid lg:grid-cols-3 mt-6 gap-7'>
        <div className='flex flex-col p-8 divide-y rounded-md shadow-lg bg-white divide-gray-100'>
          <h2 className='text-black text-sm lg:text-lg mb-4 lg:w-4/5'>
            Roads, Airstrips & Bridges Constructions
          </h2>
          <div className='grid-rows-3 grid py-6 h-full'>
            <p className='text-gray-300 text-sm mb-4 h-full row-span-2 h-full'>
              Dantata & Sawoe is a leading construction company in Nigeria and
              over the years have constructed several hundred kilometers of
              highways, airstrips, township roads, dozens of bridges and
              flyovers.
            </p>
            <div className='flex items-center'>
              <p className='text-black text-xs lg:text-sm capitalize hover:text-gray-500'>
                learn more
              </p>
              <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                <BsArrowRightShort className='text-base font-light text-white' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-8 divide-y rounded-md shadow-lg bg-white divide-gray-100'>
          <h1 className='text-black text-sm lg:text-lg mb-4 lg:w-4/5'>
            Industrial & Residential Building Construction
          </h1>
          <div className='grid-rows-3 grid py-6 h-full'>
            <p className='text-gray-300 text-sm mb-4 row-span-2 h-full'>
              Dantata & Sawoe constructs all kinds of residential and industrial
              buildings for clients.
            </p>
            <div className='flex items-center'>
              <p className='text-black text-xs lg:text-sm capitalize hover:text-gray-500'>
                learn more
              </p>
              <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                <BsArrowRightShort className='text-base font-light text-white' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col p-8 divide-y rounded-md shadow-lg bg-white divide-gray-100'>
          <h1 className='text-black text-sm lg:text-lg mb-4 lg:w-4/5'>
            Infrastructural & Town Development
          </h1>
          <div className='grid-rows-3 grid py-6 h-full'>
            <p className='text-gray-300 text-sm mb-4 row-span-2 h-full'>
              Dantata & Sawoe constructs infrastructures that has been used as a
              tool to stimulate the growth of human settlements in many urban
              areas.
            </p>
            <div className='flex items-center'>
              <p className='text-black text-xs lg:text-sm capitalize hover:text-gray-500'>
                learn more
              </p>
              <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                <BsArrowRightShort className='text-base font-light text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-gray-300 text-xs lg:text-sm text-center mt-6'>
        Offering high quality construction solutions.{' '}
        <span className='border-b border-solid text-xs lg:text-sm border-secondary pb-2 capitalize text-black font-bold'>
          build your dream now!
        </span>
      </p>
    </div>
  )
}

export default Quality
