import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import Nav from '../layouts/Nav'
import Footer from '../layouts/Footer'
import PageContainer from '../components/PageContainer'
import StyledLink from '../components/StyledLink'

interface PlaygroundCreationLayoutProps {
  title: string
}

const PlaygroundCreationLayout: React.FC<PlaygroundCreationLayoutProps> = ({
  children,
  title,
}) => (
  <PageContainer>
    <Nav>
      <Breadcrumb.Item>
        <Link href="/playground">
          <StyledLink>Playground</StyledLink>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {title}
      </Breadcrumb.Item>
    </Nav>
    {children}
    <Footer />
  </PageContainer>
)

export default PlaygroundCreationLayout
