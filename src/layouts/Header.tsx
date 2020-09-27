import React from 'react'
import styled from 'styled-components'

interface StyledHeaderProps {
  backgroundURL?: string
}

const StyledHeader = styled.header<StyledHeaderProps>`
  background: url(${(props) => props.backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  font-size: 40px;
  padding-top: 175px;
  padding-bottom: 175px;
  text-shadow: 2px 2px rgba(0,0,0,1);
`

interface HeaderProps {
  className?: string
  backgroundURL?: string
  title: string
}

const Header: React.FC<HeaderProps> = ({ className, title, backgroundURL }) => (
  <StyledHeader backgroundURL={backgroundURL} className={className}>
    {title}
  </StyledHeader>
)

export default Header
