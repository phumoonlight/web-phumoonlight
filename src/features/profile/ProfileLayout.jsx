import React from 'react'
import Nav from '../../common/Nav'
import Heading from '../../common/Heading'
import { Detail } from './components'

const ProfileLayout = () => (
  <div>
    <Nav label="Profile" />
    <Heading backgroundURL="/profile-head.png">
      <span>Poosarn Moolmuang</span>
    </Heading>
    <Detail />
  </div>
)

export default ProfileLayout
