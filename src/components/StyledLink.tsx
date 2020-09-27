import styled from 'styled-components'

interface StyledLinkProps {
  main?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  font-weight: ${(props) => (props.main ? 'bold' : 'normal')};
  font-size: ${(props) => (props.main ? '25px' : '20px')};
  :hover {
    color: #2ecc72 !important;
  }
`

export default StyledLink
