import React from 'react'
import {
  Header, Nav, Footer, PageContainer,
} from '../../common/components'
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
