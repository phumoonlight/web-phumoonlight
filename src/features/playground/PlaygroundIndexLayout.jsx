import React from 'react'
import { Breadcrumb } from 'antd'
import {
  Nav, Header, PageContainer, Footer,
} from '../../common/components'
import MenuList from './components/MenuList'

const PlaygroundLayout = () => (
  <PageContainer>
    <Nav>
      <Breadcrumb.Item>Playground</Breadcrumb.Item>
    </Nav>
    <Header title="Playground" backgroundURL="/images/playground-main-banner.jpg" />
    <MenuList />
    <Footer />
  </PageContainer>
)

export default PlaygroundLayout
