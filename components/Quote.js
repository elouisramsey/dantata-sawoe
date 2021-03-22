import React from 'react'
import { BiCheck } from 'react-icons/bi'
import { FiPhone } from 'react-icons/fi'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Quote = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Mininum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required('Name is Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is Required'),
    phone: Yup.string()
      .min(10, 'Mininum 10 characters')
      .max(14, 'Maximum 14 characters')
      .required('Phone is Required'),
    industry: Yup.string()
      .min(10, 'Mininum 10 characters')
      .max(14, 'Maximum 14 characters')
      .required('Industry is Required'),
    message: Yup.string()
      .min(2, 'Mininum 25 characters')
      .max(150, 'Maximum 150 characters')
      .required('Message is Required')
  })

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(values, { resetForm }) {
      try {
      } catch (err) {
        // console.log(err)
      }
      resetForm()
    }
  })

  return (
    <>
      <div className='quote flex px-8 py-20 md:py-36 lg:px-28 bg-black'>
        <div className='flex'>
          <div className='border-t-2 border-solid border-white w-12 lg:w-6 mt-2' />
          <div className='flex flex-col ml-4'>
            <h2 className='text-white capitalize mb-4 lg:text-sm text-tiny'>
              leading the way in building and engineering construction
            </h2>
            <h3 className='text-white lg:text-4xl mb-12 lg:w-1/2 text-sm w-full'>
              Ready to bring Bigger, Better, Faster and Stronger Projects than
              ever before!!!
            </h3>
            <div className='flex items-center mb-2'>
              <div className='rounded-full h-4 w-4 flex items-center justify-center border border-opacity-25 border-white bg-white ml-2'>
                <BiCheck className='text-sm font-light text-secondary' />
              </div>
              <p className='text-white text-xs lg:text-sm capitalize ml-2'>
                quality control system, 100% satisfaction guaranteed
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <div className='rounded-full h-4 w-4 flex items-center justify-center border border-opacity-25 border-white bg-white ml-2'>
                <BiCheck className='text-sm font-light text-secondary' />
              </div>
              <p className='text-white text-xs lg:text-sm capitalize ml-2'>
                highly professional staff, accurate testing process
              </p>
            </div>
            <div className='flex items-center mb-2'>
              <div className='rounded-full h-4 w-4 flex items-center justify-center border border-opacity-25 border-white bg-white ml-2'>
                <BiCheck className='text-sm font-light text-secondary' />
              </div>
              <p className='text-white text-xs lg:text-sm capitalize ml-2'>
                unrivalled workmanship, professional and qualified
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:flex bg-white shadow-lg rounded-sm overflow-hidden -mt-4 lg:-mt-20 mb-20 mx-auto w-3/4 md:p-20 border-b-2 border-solid border-secondary qt-form'>
        <div className='flex flex-col '>
          <div className='flex flex-col px-8 py-8 lg:py-16 bg-secondary'>
            <div className='flex-flex-col'>
              <h2 className='text-white text-sm lg:text-base capitalize'>
                our location
              </h2>
              <p className='text-gray-300 text-xs lg:text-sm my-4'>
                Nnamdi Azikiwe Way, P.O.Box 3858, Garki, Abuja FCT Nigeria
              </p>
            </div>
            <div className='flex-flex-col'>
              <h2 className='text-white text-sm lg:text-base capitalize'>
                quick contact{' '}
              </h2>
              <div className='flex items-center'>
                <p className='hidden lg:block text-gray-300 text-sm mr-2 capitalize '>
                  email:
                </p>
                <a
                  href='mailto:Info@dantata-sawoe.com'
                  className='text-gray-300 text-xs lg:text-sm my-4'
                >
                  Info@dantata-sawoe.com
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-8 py-8 lg:py-16 bg-tertiary'>
            <h2 className='text-white text-xs lg:text-sm mb-4'>
              We will get back to you within 24 hours, or call us everyday,
              09:00 AM - 5:00PM
            </h2>
            <div className='flex items-center'>
              {' '}
              <div className='flex items-center justify-center'>
                <a
                  href='tel:+2348092555519'
                  className='text-xs lg:text-base font-light text-white flex items-center justify-center flex-row'
                >
                  <div className='rounded-full h-8 w-8 flex items-center justify-center border border-opacity-25 border-gray-300 mr-2'>
                    <FiPhone className='text-base font-light text-white' />
                  </div>
                  +2348092555519
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  px-8'>
          <h2 className='text-secondary text-base lg:text-lg capitalize mt-8 lg:mt-0'>
            request a quote
          </h2>
          <p className='text-gray-300 text-xs lg:text-sm my-4'>
            Complete control over products allow us to ensure our customers
            recieve the best quality prices and services. We take great pride in
            everything we do in our factory.
          </p>
          <form
            onSubmit={handleSubmit}
            className='w-full my-4 md:gap-2 md:grid md:grid-cols-2'
            autoComplete='off'
            method='post'
            id='form'
          >
            {' '}
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-bg'
              />
              <input
                type='text'
                placeholder='Full name'
                onChange={handleChange}
                name='name'
                id='name'
                values={values.name}
                autoComplete='given-name'
                className='block w-full md:text-sm text-tiny border border-solid border-black text-bg h-7 md:h-11  bg-input focus:outline-none px-2 capitalize focus:ring-black'
              />
              <p className='text-red-600 text-xs'>
                {errors.name && touched.name ? errors.name : null}
              </p>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-bg  capitalize'
              />
              <input
                type='email'
                placeholder='Email address'
                onChange={handleChange}
                name='email'
                id='email'
                values={values.email}
                autoComplete='given-email'
                className='block w-full focus:ring-black md:text-sm text-tiny border border-solid border-black text-bg h-7 md:h-11  bg-input focus:outline-none px-2'
              />
              <p className='text-red-600 text-xs'>
                {errors.email && touched.email ? errors.email : null}
              </p>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-bg  capitalize'
              />
              <input
                type='tel'
                placeholder='Phone number'
                onChange={handleChange}
                name='phone'
                id='phone'
                values={values.phone}
                autoComplete='given-phone'
                className='block w-full focus:ring-black md:text-sm text-tiny border border-solid border-black  text-bg h-7 md:h-11  bg-input focus:outline-none px-2'
              />
              <p className='text-red-600 text-xs'>
                {errors.phone && touched.phone ? errors.phone : null}
              </p>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='industry'
                className='block text-sm font-medium text-bg  capitalize'
              />
              <input
                type='text'
                placeholder='Industry'
                onChange={handleChange}
                name='industry'
                id='industry'
                values={values.industry}
                autoComplete='given-location'
                className='block w-full focus:ring-black md:text-sm text-tiny border border-solid border-black  text-bg h-7 md:h-11  bg-input focus:outline-none px-2'
              />
              <p className='text-red-600 text-xs'>
                {errors.industry && touched.industry ? errors.location : null}
              </p>
            </div>{' '}
            <div className='mb-4 col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-bg'
              />
              <textarea
                onChange={handleChange}
                name='message'
                placeholder='Tell us a bit about your project, timeline, and budget'
                id='message'
                values={values.message}
                autoComplete='given-message'
                className='block w-full focus:ring-black md:text-sm text-tiny border border-solid border-black text-bg bg-input focus:outline-none px-2 h-32 focus:outline-none resize-none py-2'
              />
              <p className='text-red-600 text-xs'>
                {errors.message && touched.message ? errors.message : null}
              </p>
            </div>
            <div className='flex'>
              <button
                type='submit'
                className='group relative py-2 w-full lg:w-1/2  border-secondary text-tiny text-white bg-secondary focus:outline-none border-2 border-solid border-gray font-medium transition duration-500 ease-in-out hover:bg-white hover:text-black'
              >
                Submit your request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Quote
