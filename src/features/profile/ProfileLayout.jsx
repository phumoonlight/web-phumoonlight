import React from 'react'
import { BackTop } from 'antd'
import {
  Heading,
  About,
  Work,
  Education,
  Skill,
} from './components'

const ProfileLayout = () => (
  <div className="with-bg">
    <BackTop />
    <Heading />
    <About />
    <Work />
    <Education />
    <Skill />
  </div>
)

export default ProfileLayout
