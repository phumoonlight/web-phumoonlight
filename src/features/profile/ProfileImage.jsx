import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProfileImage = ({ className }) => (
  <img className={className} src="/images/profile-pic.jpg" alt="profile" />
)

ProfileImage.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProfileImage)`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  object-fit: cover;
  width: 100%;
  height: 250px;
`
