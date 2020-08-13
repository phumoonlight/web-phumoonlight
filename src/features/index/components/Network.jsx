import React from 'react'
import { LinkedinFilled, FacebookFilled, GithubFilled } from '@ant-design/icons'
import SocialLink from './SocialLink'
import style from './Network.module.css'

const Network = () => (
  <div className={style.root}>
    <SocialLink icon={<LinkedinFilled />} url="https://www.linkedin.com/in/poosarn-moolmuang/" />
    <SocialLink icon={<FacebookFilled />} url="https://www.facebook.com/ppmeemee" />
    <SocialLink icon={<GithubFilled />} url="https://github.com/phumoonlight/" />
  </div>
)

export default Network
