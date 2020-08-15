import React from 'react'
import { MenuCardLink } from '../../../common/components'
import style from './MenuList.module.css'

const MenuList = () => (
  <div className={style.root}>
    <MenuCardLink
      href="/playground/lightswitch"
      className={style.menu}
      bannerSrc="/profile-head.png"
      title="LIGHT SWITCH"
    >
      ...
    </MenuCardLink>
  </div>
)

export default MenuList
