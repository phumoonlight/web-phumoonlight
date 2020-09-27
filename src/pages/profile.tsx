import React from 'react'
import Head from 'next/head'
import ProfileLayout from '../feature-profile/ProfileLayout'
import { HEAD } from '../config'

const ProfilePage: React.FC = () => (
  <>
    <Head>
      <title>{HEAD.title.profile}</title>
    </Head>
    <ProfileLayout />
  </>
)

export default ProfilePage
