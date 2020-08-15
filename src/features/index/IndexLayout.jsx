import React from 'react'
import { Heading, Nav, Network } from '../../common/components'
import MenuList from './components/MenuList'

const IndexLayout = () => (
  <div>
    <Nav />
    <Heading key="h-test" backgroundURL="/images/index-main-banner.jpg">Phumoonlight</Heading>
    <MenuList />
    <Network />
  </div>
)

export default IndexLayout
