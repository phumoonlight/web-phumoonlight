import React from 'react'
import { BackTop } from 'antd'
import Heading from '../Heading'
import About from '../About'
import Work from '../Work'
import Education from '../Education'
import Skill from '../Skill'

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
