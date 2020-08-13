import React from 'react'
import Head from 'next/head'
import { HEAD } from '../config'
import IndexLayout from '../layout/IndexLayout'

const Index = () => (
  <>
    <Head>
      <title>{HEAD.title.index}</title>
    </Head>
    <IndexLayout />
  </>
)

export default Index
