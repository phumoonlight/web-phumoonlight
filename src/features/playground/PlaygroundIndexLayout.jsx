import React from 'react'
import { Nav, Heading, Network } from '../../common/components'

const IndexLayout = () => (
  <div>
    <Nav label="Playground" />
    <Heading key="h-test" backgroundURL="/playground-head.jpg">Playground (Coming Soon!)</Heading>
    <Network />
  </div>
)

export default IndexLayout
