import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import {
  Nav, StyledLink, PageContainer, Footer,
} from '../../common/components'
import PlaygroundCreationContext from './PlaygroundCreationContext'

const PlaygroundCreationLayout = ({ children }) => {
  const { title } = React.useContext(PlaygroundCreationContext)
  return (
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
}

PlaygroundCreationLayout.propTypes = {
  children: PropTypes.string.isRequired,
}

export default PlaygroundCreationLayout
