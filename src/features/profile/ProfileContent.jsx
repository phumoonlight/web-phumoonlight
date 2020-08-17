import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProfileContent = ({ className, children, title }) => (
  <div className={className}>
    <h2 className="title">{title}</h2>
    {children}
  </div>
)

ProfileContent.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default styled(ProfileContent)`
  .title {
    font-weight: bold;
    color: #f5f5f5;
    margin-top: 25px;
  }
`
