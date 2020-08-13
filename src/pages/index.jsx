import React from 'react'
import Head from 'next/head'
import { HEAD } from '../config'
import ProfileLayout from '../features/profile/ProfileLayout'

const Index = () => (
  <>
    <Head>
      <title>{HEAD.title.index}</title>
    </Head>
    <ProfileLayout />
  </>
)

export default Index
