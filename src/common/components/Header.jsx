import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = ({ className, title }) => (
  <header className={className}>
    {title}
  </header>
)

Header.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default styled(Header)`
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
