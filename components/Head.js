import React from 'react'
import NextHead from 'next/head'

const Head = () => (
  <NextHead>
    <meta charSet='UTF-8' />
    {/* <!-- HTML Meta Tags --> */}
    <title>DANTATA & SAWOE</title>
    <meta
      name='description'
      content='Dantata & Sawoe is a leading construction company in Nigeria and over the years have constructed several hundred kilometres of highways, airstrips, township roads, dozens of bridges and flyovers.'
    />

    {/* <!-- Google / Search Engine Tags --> */}
    <meta itemProp='name' content='DANTATA & SAWOE' />
    <meta
      itemProp='description'
      content='Dantata & Sawoe is a leading construction company in Nigeria and over the years have constructed several hundred kilometres of highways, airstrips, township roads, dozens of bridges and flyovers.'
    />
    <meta
      itemProp='image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/v1616497877/dantata/logo_icon_hi2lqo.webp'
    />

    {/* <!-- Facebook Meta Tags --> */}
    <meta property='og:url' content='https://dantata-sawoe.vercel.app' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='DANTATA & SAWOE' />
    <meta
      property='og:description'
      content='Dantata & Sawoe is a leading construction company in Nigeria and over the years have constructed several hundred kilometres of highways, airstrips, township roads, dozens of bridges and flyovers.'
    />
    <meta
      property='og:image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/v1616497877/dantata/logo_icon_hi2lqo.webp'
    />

    {/* <!-- Twitter Meta Tags --> */}
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content='DANTATA & SAWOE' />
    <meta
      name='twitter:description'
      content='Dantata & Sawoe is a leading construction company in Nigeria and over the years have constructed several hundred kilometres of highways, airstrips, township roads, dozens of bridges and flyovers.'
    />
    <meta
      name='twitter:image'
      content='https://res.cloudinary.com/walking-voice-limited/image/upload/v1616497877/dantata/logo_icon_hi2lqo.webp'
    />

    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Roboto&display=swap'
      rel='stylesheet'
    />
    <meta name='theme-color' content='#ffffff' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta httpEquiv='Accept-CH' content='DPR, Width' />

    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
    <meta name='msapplication-TileColor' content='#da532c' />
  </NextHead>
)

export default Head
