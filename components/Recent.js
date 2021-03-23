import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

const Recent = () => {
  return (
    <div className='flex flex-col px-8 py-20 md:py-36 lg:px-28 bg-white justify-center items-center'>
      <h2 className='lg:text-base text-xs text-secondary text-center capitalize mb-2'>
        featured projects
      </h2>
      <h3 className='text-black text-sm lg:text-4xl mb-4 text-bold capitalize text-center w-full lg:w-3/4'>
        our recent works
      </h3>
      <div className='md:grid-cols-3 grid md:gap-x-6 md:gap-y-8 my-8 gap-y-8'>
        <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
          <Link href='/'>
            <a className=''>
              <Image
                cloudName='walking-voice-limited'
                publicId='dantata/bayelsa_airport_pvjlfc.webp'
                alt='Bayelsa Airport'
              >
                <Transformation
                  quality='auto'
                  crop='scale'
                  fetchFormat='auto'
                />
              </Image>
            </a>
          </Link>
          <div className='py-8 px-8'>
            <div className=''>
              <h2 className='text-sm lg:text-lg text-black font-medium capitalize truncate'>
                bayelsa airport runway
              </h2>
              <h3 className='text-secondary text-xs capitalize'>
                construction, engineering
              </h3>
              <p className='text-gray-300 text-xs lg:text-sm my-4'>
                We built the new Bayelsa Airport Runway which gave the airport a
                new refreshing look, and this runaway is of top durability.
              </p>
            </div>
            <div className='border-b border-solid border-gray-700' />
            <div className='hover:bg-secondary w-full'>
              <div className='flex items-center w-full h-full py-3'>
                <p className='text-black font-medium text-xs lg:text-sm capitalize hover:text-white'>
                  learn more
                </p>
                <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                  <BsArrowRightShort className='text-base font-light text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
          <Link href='/'>
            <a className=''>
              <Image
                cloudName='walking-voice-limited'
                publicId='dantata/dangote_dsdgwa.webp'
                alt='Dangote Refinery'
              >
                <Transformation
                  quality='auto'
                  crop='scale'
                  fetchFormat='auto'
                />
              </Image>
            </a>
          </Link>
          <div className='py-8 px-8'>
            <div className=''>
              <h2 className='text-sm lg:text-lg text-black font-medium capitalize truncate'>
                platform & access road works
              </h2>
              <h3 className='text-secondary text-xs capitalize'>
                building, engineering
              </h3>
              <p className='text-gray-300 text-xs lg:text-sm my-4'>
                We are working on the construction of Dangote refinery platform
                and access roads, which would enable easy transportation in
                Jetty
              </p>
            </div>
            <div className='border-b border-solid border-gray-700' />
            <div className='hover:bg-secondary w-full'>
              <div className='flex items-center w-full h-full py-3'>
                <p className='text-black font-medium text-xs lg:text-sm capitalize hover:text-white'>
                  learn more
                </p>
                <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                  <BsArrowRightShort className='text-base font-light text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden'>
          <Link href='/'>
            <a className=''>
              <Image
                cloudName='walking-voice-limited'
                publicId='dantata/wearing_course_jkydil.webp'
                alt='Wearing Course'
              >
                <Transformation
                  quality='auto'
                  crop='scale'
                  fetchFormat='auto'
                />
              </Image>
            </a>
          </Link>
          <div className='py-8 px-8'>
            <div className=''>
              <h2 className='text-sm lg:text-lg text-black font-medium capitalize truncate'>
                wearing course Kmr
              </h2>
              <h3 className='text-secondary text-xs capitalize'>
                construction, engineering
              </h3>
              <p className='text-gray-300 text-xs lg:text-sm my-4'>
                Wearing course to protect optimally against weather influences,
                heavy (freight) traffic and de-icing salt.
              </p>
            </div>
            <div className='border-b border-solid border-gray-700' />
            <div className='hover:bg-secondary w-full'>
              <div className='flex items-center w-full h-full py-3'>
                <p className='text-black font-medium text-xs lg:text-sm capitalize hover:text-white'>
                  learn more
                </p>
                <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-white bg-secondary ml-2'>
                  <BsArrowRightShort className='text-base font-light text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recent
