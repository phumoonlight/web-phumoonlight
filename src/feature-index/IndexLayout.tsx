import React from 'react'
import Nav from '../layouts/Nav'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageContainer from '../components/PageContainer'
import MenuList from './IndexMenuList'

const IndexLayout = () => (
  <PageContainer>
    <Nav />
    <Header title="Phumoonlight" backgroundURL="/images/index-main-banner.jpg" />
    <MenuList />
    <Footer />
  </PageContainer>
)

export default IndexLayout
