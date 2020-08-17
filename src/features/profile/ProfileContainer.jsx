import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'

const ProfileContainer = ({ className }) => (
  <div className={className}>
    <ProfileCard />
  </div>
)

ProfileContainer.propTypes = {
  className: PropTypes.string.isRequired,
}

export default styled(ProfileContainer)`
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  min-height: 100%;
  margin-bottom: 50px;
`
