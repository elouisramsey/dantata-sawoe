import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Image, Transformation } from 'cloudinary-react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'

export const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()
  return (
    <div className='hero overflow-hidden h-screen'>
      <header className='w-full bg-transparent md:border-b border-solid border-gray-300 border-opacity-25'>
        <nav
          className={
            'py-2 lg:py-0 lg:my-0 lg:h-20 overflow-hidden' +
            (navbarOpen ? ' bg-secondary' : ' bg-transparent')
          }
        >
          <div className='h-full md:px-4 lg:px-28 flex flex-wrap items-center md:flex-no-wrap'>
            <div className='w-1/2 md:w-1/5 ml-8 md:ml-0 py-2 md:pr-2'>
              <Link href='/'>
                <a>
                  <div>
                    <Image
                      cloudName='walking-voice-limited'
                      publicId='dantata/Dantata_and_Sawoe_pd4m7l.webp'
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
            <div className='ml-auto md:hidden mr-4'>
              <button
                className='flex items-center h-6 w-6 outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <FaTimes
                  className={
                    navbarOpen ? 'block text-2xl text-white' : 'hidden'
                  }
                />
                <GiHamburgerMenu
                  className={
                    navbarOpen ? 'hidden' : 'block text-2xl text-white'
                  }
                />
              </button>
            </div>
            <div
              className={
                'w-full md:w-auto md:flex-grow md:flex bg-secondary lg:bg-transparent md:items-center h-screen md:h-full transition duration-500 ease-in-out md:border-l md:border-r md:border-solid border-gray-300 md:border-opacity-25 lg:px-8 md:justify-between ' +
                (navbarOpen ? 'block' : ' hidden')
              }
            >
              <ul className='flex flex-col mt-4 md:flex-row md:items-center md:mt-0 md:pt-0 justify-between w-full h-2/5 md:h-full px-8 md:px-0 transition duration-500 ease-in-out md:w-3/5'>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/' ? ' active' : null)
                      }
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/about'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/about' ? ' active' : null)
                      }
                    >
                      company
                    </a>
                  </Link>
                </li>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/services'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/services' ? ' active' : null)
                      }
                    >
                      services
                    </a>
                  </Link>
                </li>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/projects'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/projects' ? ' active' : null)
                      }
                    >
                      projects
                    </a>
                  </Link>
                </li>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/news'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/news' ? ' active' : null)
                      }
                    >
                      news
                    </a>
                  </Link>
                </li>
                <li className='transition duration-500 ease-in-out flex h-full items-center'>
                  <Link href='/contact'>
                    <a
                      className={
                        'font-medium text-sm hover:text-gray-300 capitalize h-full flex items-center justify-center text-white ' +
                        (router.pathname === '/contact' ? ' active' : null)
                      }
                    >
                      Contacts
                    </a>
                  </Link>
                </li>
              </ul>
              <Link href='/Form'>
                <a className='group relative text-xs md:text-sm bg-secondary focus:outline-none font-medium transition duration-500 ease-in-out border text-white rounded-sm py-2 px-3.5 block hover:bg-primary md:flex flex-row w-1/4 flex flex-row justify-center items-center border-secondary hidden'>
                  Get a Quote <BsArrowRightShort className='text-2xl' />
                </a>
              </Link>
            </div>
            <div className='hidden md:flex items-center justify-center mx-4'>
              <a
                href='tel:+2348092555519'
                className='text-base font-light text-white flex items-center justify-center flex-row'
              >
                <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-gray-300 mr-2'>
                  <FiPhone className='text-base font-light text-white' />
                </div>
                +2348092555519
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className='flex items-start h-full flex-col px-8 py-24 md:py-48 lg:px-28'>
        <h1 className='text-2xl md:text-4xl capitalize text-white mb-8 font-semibold lg:text-four md:leading-tight'>
          provide effective
          <br /> building solutions!
        </h1>
        <p className='font-normal w-full text-white text-sm lg:text-lg lg:w-1/2'>
          A leading developer of A-grade commercial, industrial and residential
          projects in Nigeria. Since its foundation, the company has doubled its
          turnover year on year, with staff numbers swelling accordingly.
        </p>
        <div className='flex flex-row lg:w-3/5 my-8 w-full'>
          {' '}
          <Link href='/services'>
            <a className='group relative text-xs md:text-sm bg-secondary focus:outline-none font-medium transition duration-500 ease-in-out border border-secondary hover:border-primary text-white rounded-sm py-2 lg:px-3.5 block hover:bg-primary flex flex-row w-1/2 lg:w-1/5 flex flex-row justify-center items-center z-20'>
              Our Services <BsArrowRightShort className='text-lg lg:text-2xl' />
            </a>
          </Link>
          <Link href='/about'>
            <a className='group relative text-xs md:text-sm bg-white focus:outline-none font-medium transition duration-500 ease-in-out border text-gray-700 rounded-sm py-2 lg:px-3.5 block hover:bg-primary flex flex-row w-1/2 lg:w-1/5 flex flex-row justify-center items-center mx-6 z-20 hover:border-primary'>
              More About Us!
            </a>
          </Link>
        </div>
      </div>
      {/* <img
        src='https://res.cloudinary.com/walking-voice-limited/image/upload/q_auto/v1616063654/dantata/construction_worker_b329rt.webp'
        alt=''
        className='block absolute left-0 top-0 r-0 max-w-full max-h-full object-cover w-full h-full'
      /> */}
    </div>
  )
}
