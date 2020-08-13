import React from 'react'
import Head from 'next/head'
import { HEAD } from '../config'
import IndexLayout from '../layout/IndexLayout'

const Profile = () => (
  <>
    <Head>
      <title>{HEAD.title.profile}</title>
    </Head>
    <IndexLayout />
  </>
)

export default Profile
