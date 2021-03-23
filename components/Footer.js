import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className='px-8 py-20 md:py-36 lg:px-28 bg-gray-800 lg:grid-cols-4 grid mt-16 gap-x-7'>
        <div className='flex flex-col'>
          <div className=''>
            <Link href='/'>
              <a>
                <div>
                  <Image
                    cloudName='walking-voice-limited'
                    publicId='dantata/logo_dxhkwn.webp'
                    alt='DANTATA & SAWOE'
                  >
                    <Transformation
                      quality='auto'
                      crop='scale'
                      fetchFormat='auto'
                    />
                  </Image>
                </div>
              </a>
            </Link>
          </div>
          <p className='text-gray-400 text-xs lg:text-sm my-4'>
            Dantata & Sawoe is a leading construction company in Nigeria with
            over 40 years working experience in delivering value-added civil and
            infrastructural projects in Nigeria. Over the years we have
            constructed several hundred kilometers of highways and township
            roads and dozens of bridges and flyovers.
          </p>
          <div className='flex items-center'>
            <div className='flex items-center justify-center'>
              <a
                href='facebook.com'
                className='text-base font-light text-white flex items-center justify-center flex-row'
              >
                <div className='rounded-full h-8 w-8 flex items-center justify-center border bg-gray-700 border-opacity-25 border-gray-300 mr-2'>
                  <FaFacebookF className='text-base font-light text-white' />
                </div>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='twitter.com'
                className='text-base font-light text-white flex items-center justify-center flex-row'
              >
                <div className='rounded-full h-8 w-8 flex items-center justify-center border bg-gray-700 border-opacity-25 border-gray-300 mr-2'>
                  <FaTwitter className='text-base font-light text-white' />
                </div>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='instagram.com'
                className='text-base font-light text-white flex items-center justify-center flex-row'
              >
                <div className='rounded-full h-8 w-8 flex items-center justify-center border bg-gray-700 border-opacity-25 border-gray-300 mr-2'>
                  <FaInstagram className='text-base font-light text-white' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <h2 className='text-sm lg:text-base text-white mb-4'>Services</h2>
          <ul className='flex flex-col'>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                construction management
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                construction consultants
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                roads, airstrips & bridges construction
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                infrastructural & town development
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                water treatment
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                residential & indutrial building
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-12'>
          <h2 className='text-sm lg:text-base text-white mb-4'>Company</h2>
          <ul className='flex flex-col'>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                about us
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                meet our team
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                news & media
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                case studies
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                contacts
              </a>
            </li>
            <li className=' mb-2'>
              <a
                href=''
                className='transition duration-500 ease-in-out text-gray-400 text-xs lg:text-sm hover:text-white capitalize'
              >
                careers
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-12'>
          <h2 className='text-sm lg:text-base text-white mb-4'>Newsletter</h2>
          <p className='text-gray-400 text-xs lg:text-sm mb-6 lg:mb-8'>
            Sign up for industry news, thoughts and insights from Dantata &
            Sawoe.
          </p>
          <div className='flex border border-solid border-white h-10 overflow-hidden justify-between'>
            <input
              type='text'
              placeholder='Enter email address'
              className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm outline-none focus:outline-none focus:ring-transparent w-full focus:border-0 focus-border-transparent border-transparent'
            />
            <button className='bg-white text-white font-medium capitalize text-sm h-full outline-none focus:outline-none'>
              <div className='rounded-full h-8 w-8 flex items-center justify-center border bg-secondary border-opacity-25 border-secondary mr-2'>
                <FaArrowRight className='text-base font-light text-white' />
              </div>
            </button>
          </div>
          <p className='text-gray-400 text-xs mt-2'>
            Have a question?{' '}
            <span>
              <a
                href=''
                className='border-b border-solid border-white pb-2 text-white ml-2'
              >
                Click here
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className='px-8 py-6 lg:px-28 bg-gray-900 flex items-center justify-between flex-col lg:flex-row'>
        <div className='flex items-center'>
          <p className='text-gray-400 text-tiny lg:text-sm mr-2 capitalize'>
            terms & conditions
          </p>
          <div className='flex items-center mr-2 justify-center'>
            <BsDot className='text-gray-400 text-sm capitalize' />
          </div>
          <p className='text-gray-400 text-tiny lg:text-sm mr-2 capitalize'>
            privacy policy
          </p>
          <div className='flex items-center mr-2 justify-center'>
            <BsDot className='text-gray-400 text-sm capitalize' />
          </div>
          <p className='text-gray-400 text-tiny lg:text-sm mr-2 capitalize'>
            sitemap
          </p>
        </div>
        <div className='items-center flex text-gray-400 text-tiny lg:text-sm capitalize mt-3 lg:mt-0'>
          © 2021 Dantata & Sawoe. Made by{' '}
          <a
            href='walkingvoice.org'
            className='text-white text-tiny lg:text-sm ml-2'
          >
            Walking Voice
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
