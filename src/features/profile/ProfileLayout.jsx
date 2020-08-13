import React from 'react'
import {
  Heading,
  About,
  Work,
  Education,
  Skill,
} from './components'

const ProfileLayout = () => (
  <div className="with-bg">
    <Heading />
    <About />
    <Work />
    <Education />
    <Skill />
  </div>
)

export default ProfileLayout
