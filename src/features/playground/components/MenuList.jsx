import React from 'react'
import { MenuCardLink } from '../../../common/components'
import style from './MenuList.module.css'

const MenuList = () => (
  <div className={style.root}>
    <MenuCardLink
      href="/playground/lightswitch"
      className={style.menu}
      bannerSrc="/images/playground-banner-lightswitch.jpg"
      title="LIGHT SWITCH"
    />
    {/* <MenuCardLink
      href="/playground/compressimg"
      className={style.menu}
      bannerSrc="/images/playground-banner-compressimg.jpg"
      title="COMPRESS IMG"
    /> */}
  </div>
)

export default MenuList
