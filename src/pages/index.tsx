import React from 'react'
import Head from 'next/head'
import { HEAD } from '../config'
import IndexLayout from '../feature-index/IndexLayout'

const IndexPage: React.FC = () => (
  <>
    <Head>
      <title>{HEAD.title.index}</title>
    </Head>
    <IndexLayout />
  </>
)

export default IndexPage
