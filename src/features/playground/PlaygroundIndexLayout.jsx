import React from 'react'
import { Breadcrumb } from 'antd'
import { Nav, Heading, Network } from '../../common/components'
import MenuList from './components/MenuList'

const PlaygroundLayout = () => (
  <div>
    <Nav>
      <Breadcrumb.Item>Playground</Breadcrumb.Item>
    </Nav>
    <Heading backgroundURL="/images/playground-main-banner.jpg">Playground</Heading>
    <MenuList />
    <Network />
  </div>
)

export default PlaygroundLayout
