import React from 'react'
import { LinkedinFilled, FacebookFilled, GithubFilled } from '@ant-design/icons'
import LinkNewTab from './LinkNewTab'
import style from './Network.module.css'

const Network = () => (
  <div className={style.root}>
    <LinkNewTab href="https://www.linkedin.com/in/poosarn-moolmuang/">
      <LinkedinFilled />
    </LinkNewTab>
    <LinkNewTab href="https://www.facebook.com/ppmeemee">
      <FacebookFilled />
    </LinkNewTab>
    <LinkNewTab href="https://github.com/phumoonlight/">
      <GithubFilled />
    </LinkNewTab>
  </div>
)

export default Network
