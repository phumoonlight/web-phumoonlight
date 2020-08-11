import React from 'react'
import { LinkedinFilled, FacebookFilled, GithubFilled } from '@ant-design/icons'
import SocialLink from './SocialLink'
import style from './Heading.module.css'

const Heading = () => (
  <div className={style.root}>
    <h1>Poosarn Moolmuang</h1>
    <h3>@phumoonlight</h3>
    <SocialLink icon={<LinkedinFilled />} url="https://www.linkedin.com/in/poosarn-moolmuang/" />
    <SocialLink icon={<FacebookFilled />} url="https://www.facebook.com/ppmeemee" />
    <SocialLink icon={<GithubFilled />} url="https://github.com/phumoonlight/" />
  </div>
)

export default Heading
