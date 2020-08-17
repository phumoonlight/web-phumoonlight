import React from 'react'
import { Breadcrumb } from 'antd'
import {
  Nav, Header, PageContainer, Footer,
} from '../../common/components'
import ProfileContainer from './ProfileContainer'

const ProfileLayout = () => (
  <PageContainer>
    <Nav>
      <Breadcrumb.Item>Profile</Breadcrumb.Item>
    </Nav>
    <Header
      title="Poosarn Moolmuang"
      backgroundURL="/images/profile-main-banner.jpg"
    />
    <ProfileContainer />
    <Footer />
  </PageContainer>
)

export default ProfileLayout
