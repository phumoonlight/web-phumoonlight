import React from 'react'
import { BackTop } from 'antd'
import {
  Heading,
  About,
  Work,
  Education,
  Skill,
} from '../profile/components'

const IndexLayout = () => (
  <div className="with-bg">
    <BackTop />
    <Heading />
    <About />
    <Work />
    <Education />
    <Skill />
  </div>
)

export default IndexLayout
