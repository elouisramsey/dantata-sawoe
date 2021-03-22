import React from 'react'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Quality from '../components/Quality'
import Quickie from '../components/Quickie'
import Quote from '../components/Quote'
import Recent from '../components/Recent'

const Index = () => {
  return (
    <>
      <Head />
      <Layout>
        <Quickie />
        <Quality />
        <Recent />
        <Quote />
      </Layout>
    </>
  )
}

export default Index
