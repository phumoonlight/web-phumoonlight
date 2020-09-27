import React from 'react'
import { Breadcrumb } from 'antd'
import Nav from '../layouts/Nav'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import PageContainer from '../components/PageContainer'
import MenuList from './MenuList'

const PlaygroundLayout: React.FC = () => (
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
