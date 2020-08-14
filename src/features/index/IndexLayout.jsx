import React from 'react'
import { Heading, Nav, Network } from '../../common/components'
import { Menu } from './components'

const IndexLayout = () => (
  <div>
    <Nav label="Home" />
    <Heading key="h-test" backgroundURL="/forest.jpg">Phumoonlight</Heading>
    <Menu />
    <Network />
  </div>
)

export default IndexLayout
