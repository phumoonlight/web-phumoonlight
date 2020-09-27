import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from 'antd'
import styled from 'styled-components'
import StyledLink from '../components/StyledLink'

const StyledNav = styled.nav`
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

interface NavProps {
  className?: string
}

const Nav: React.FC<NavProps> = ({ className, children }) => (
  <StyledNav>
    <Breadcrumb className={className}>
      <Breadcrumb.Item>
        <Link href="/">
          <StyledLink main>Phumoonlight</StyledLink>
        </Link>
      </Breadcrumb.Item>
      {children}
    </Breadcrumb>
  </StyledNav>
)

export default Nav
