import React from 'react'
import Nav from '../../common/Nav'
import Heading from '../../common/Heading'
import { Menu, Network } from './components'

const IndexLayout = () => (
  <div>
    <Nav label="Home" />
    <Heading key="h-test" backgroundURL="/forest.jpg">Phumoonlight</Heading>
    <Menu />
    <Network />
  </div>
)

export default IndexLayout
