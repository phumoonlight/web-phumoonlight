import React from 'react'
import Head from 'next/head'
import { HEAD } from '../config'
import ProfileLayout from '../features/profile/ProfileLayout'

const Profile = () => (
  <>
    <Head>
      <title>{HEAD.title.profile}</title>
    </Head>
    <ProfileLayout />
  </>
)

export default Profile
