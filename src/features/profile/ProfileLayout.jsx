import React from 'react'
import { Nav, Heading, Network } from '../../common/components'
import Detail from './components/Detail'

const ProfileLayout = () => (
  <div>
    <Nav label="Profile" />
    <Heading backgroundURL="/images/profile-main-banner.jpg">
      <span>Poosarn Moolmuang</span>
    </Heading>
    <Detail />
    <Network />
  </div>
)

export default ProfileLayout
