import React from 'react'
import { Nav, Heading, Network } from '../../common/components'
import { Detail } from './components'

const ProfileLayout = () => (
  <div>
    <Nav label="Profile" />
    <Heading backgroundURL="/profile-head.png">
      <span>Poosarn Moolmuang</span>
    </Heading>
    <Detail />
    <Network />
  </div>
)

export default ProfileLayout
