import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlaygroundHeader = ({ className, title }) => (
  <h1 className={className}>
    {title}
  </h1>
)

PlaygroundHeader.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default styled(PlaygroundHeader)`
  text-align: center;
  font-weight: bold;
  padding-bottom: 25px;
  color: ${(props) => props.color}
`
