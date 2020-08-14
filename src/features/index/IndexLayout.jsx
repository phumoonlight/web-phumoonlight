import React from 'react'
import Nav from '../../common/Nav'
import { Heading, Menu, Network } from './components'

const IndexLayout = () => (
  <div>
    <Nav label="Home" />
    <Heading />
    <Menu />
    <Network />
  </div>
)

export default IndexLayout
