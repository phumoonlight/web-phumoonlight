import React from 'react'
import { Header, Nav, Footer } from '../../common/components'
import MenuList from './components/MenuList'

const IndexLayout = () => (
  <div>
    <Nav />
    <Header title="Phumoonlight" backgroundURL="/images/index-main-banner.jpg" />
    <MenuList />
    <Footer />
  </div>
)

export default IndexLayout
