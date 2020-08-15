import React from 'react'
import { MenuCardLink } from '../../../common/components'
import style from './MenuList.module.css'

const MenuList = () => (
  <div className={style.root}>
    <MenuCardLink
      href="/profile"
      className={style.menu}
      bannerSrc="/images/profile-main-banner.png"
      title="PROFILE"
    >
      View my profile.
    </MenuCardLink>
    <MenuCardLink
      href="/playground"
      className={style.menu}
      bannerSrc="/images/playground-main-banner.jpg"
      title="PLAYGROUND"
    >
      View my creations.
    </MenuCardLink>
    <MenuCardLink
      href="/resume.pdf"
      className={style.menu}
      bannerSrc="/images/resume-main-banner.jpg"
      title="RESUME"
    >
      View my resume.
    </MenuCardLink>
  </div>
)

export default MenuList
