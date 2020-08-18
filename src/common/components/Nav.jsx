import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import styled from 'styled-components'
import StyledLink from './StyledLink'

const Nav = ({ className, children }) => (
  <nav>
    <Breadcrumb className={className}>
      <Breadcrumb.Item>
        <Link href="/">
          <StyledLink main>Phumoonlight</StyledLink>
        </Link>
      </Breadcrumb.Item>
      {children}
    </Breadcrumb>
  </nav>
)

Nav.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Nav.defaultProps = {
  children: '',
}

export default styled(Nav)`
  padding: 15px;
  background: #2C3335;
  opacity: .85;
  position: fixed;
  width: 100%;
  z-index: 5;
  color: white;
  span {
    color: #A4B0BD;
    font-size: 20px;
  }
  a {
    color: white;
  }
  &.ant-breadcrumb > span:last-child a {
    color: #ffffff;
  }
`
