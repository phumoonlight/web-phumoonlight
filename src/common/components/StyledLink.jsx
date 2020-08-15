import styled from 'styled-components'

const StyledLink = styled.a`
  font-weight: ${({ main }) => (main ? 'bold' : 'normal')};
  font-size: ${({ main }) => (main ? '25px' : '20px')};
  :hover {
    color: #2ecc72 !important;
  }
`

export default StyledLink
