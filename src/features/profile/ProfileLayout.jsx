import React from 'react'
import { Breadcrumb } from 'antd'
import { Nav, Heading, Network } from '../../common/components'
import Detail from './components/Detail'

const ProfileLayout = () => (
  <div>
    <Nav>
      <Breadcrumb.Item>Profile</Breadcrumb.Item>
    </Nav>
    <Heading backgroundURL="/images/profile-main-banner.jpg">
      <span>Poosarn Moolmuang</span>
    </Heading>
    <Detail />
    <Network />
  </div>
)

export default ProfileLayout
