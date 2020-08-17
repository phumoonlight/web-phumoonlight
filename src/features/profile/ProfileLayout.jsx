import React from 'react'
import { Breadcrumb } from 'antd'
import { Nav, Heading, Network } from '../../common/components'
import ProfileContainer from './ProfileContainer'

const ProfileLayout = () => (
  <div>
    <Nav>
      <Breadcrumb.Item>Profile</Breadcrumb.Item>
    </Nav>
    <Heading backgroundURL="/images/profile-main-banner.jpg">
      <span>Poosarn Moolmuang</span>
    </Heading>
    <ProfileContainer />
    <Network />
  </div>
)

export default ProfileLayout
