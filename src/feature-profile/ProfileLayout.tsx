import React from 'react'
import { Breadcrumb } from 'antd'
import Nav from '../layouts/Nav'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageContainer from '../components/PageContainer'
import ProfileContainer from './ProfileContainer'

const ProfileLayout: React.FC = () => (
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
