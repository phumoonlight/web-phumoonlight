import React from 'react'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
  min-height: 100%;
  margin-bottom: 50px;
`

interface ProfileContainerProps {
  className?: string
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ className }) => (
  <Container className={className}>
    <ProfileCard />
  </Container>
)

export default ProfileContainer
