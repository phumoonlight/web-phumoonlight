import React from 'react'
import { Heading, Nav, Network } from '../../common/components'
import MenuList from './components/MenuList'

const IndexLayout = () => (
  <div>
    <Nav label="Home" />
    <Heading key="h-test" backgroundURL="/forest.jpg">Phumoonlight</Heading>
    <MenuList />
    <Network />
  </div>
)

export default IndexLayout
