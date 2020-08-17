import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileBlock from './ProfileBlock'

const ProfileContainer = ({ className }) => (
  <div className={className}>
    <ProfileBlock />
  </div>
)

ProfileContainer.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProfileContainer)`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
`
