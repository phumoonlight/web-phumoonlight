import React from 'react'
import { Nav, Heading, Network } from '../../common/components'
import MenuList from './components/MenuList'

const IndexLayout = () => (
  <div>
    <Nav label="Playground" />
    <Heading backgroundURL="/images/playground-main-banner.jpg">Playground</Heading>
    <MenuList />
    <Network />
  </div>
)

export default IndexLayout
