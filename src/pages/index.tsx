import React from 'react'
import Head from 'next/head'
import { PageRoot } from '../components/PageRoot'
import { IndexLayout } from '../layouts/IndexLayout'
import { HEAD } from '../config'

const IndexPage: React.FC = () => (
  <PageRoot>
    <Head>
      <title>{HEAD.title.index}</title>
    </Head>
    <IndexLayout />
  </PageRoot>
)

export default IndexPage
