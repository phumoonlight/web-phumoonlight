import React from 'react'
import { Nav, Heading, Network } from '../../common/components'
import MenuList from './components/MenuList'

const IndexLayout = () => (
  <div>
    <Nav label="Playground" />
    <Heading key="h-test" backgroundURL="/playground-head.jpg">Playground (Coming Soon!)</Heading>
    <MenuList />
    <Network />
  </div>
)

export default IndexLayout
