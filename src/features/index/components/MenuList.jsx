import React from 'react'
import { MenuCardLink } from '../../../common/components'
import style from './MenuList.module.css'

const MenuList = () => (
  <div className={style.root}>
    <MenuCardLink
      href="/profile"
      className={style.menu}
      bannerSrc="/profile-head.png"
      title="PROFILE"
    >
      View my profile.
    </MenuCardLink>
    <MenuCardLink
      href="/playground"
      className={style.menu}
      bannerSrc="/playground-head.jpg"
      title="PLAYGROUND"
    >
      View my creations.
    </MenuCardLink>
    <MenuCardLink
      href="/resume.pdf"
      className={style.menu}
      bannerSrc="/resume-head.jpg"
      title="RESUME"
    >
      View my resume.
    </MenuCardLink>
  </div>
)

export default MenuList
