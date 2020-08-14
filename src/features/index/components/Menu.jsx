import React from 'react'
import Link from 'next/link'
import style from './Menu.module.css'

const Menu = () => (
  <div className={style.root}>
    <Link href="/profile">
      <div>
        <img className={style.menuimg} src="/profile-head.png" alt="menu-img" />
        <div className={style.menutitle}>PROFILE</div>
        <div className={style.menudesc}>View my profile.</div>
      </div>
    </Link>
    <Link href="/playground">
      <div>
        <img className={style.menuimg} src="/playground-head.jpg" alt="menu-img" />
        <div className={style.menutitle}>PLAYGROUND</div>
        <div className={style.menudesc}>Visit my creations.</div>
      </div>
    </Link>
    <Link href="/resume.pdf">
      <div>
        <img className={style.menuimg} src="/resume-head.jpg" alt="menu-img" />
        <div className={style.menutitle}>RESUME</div>
        <div className={style.menudesc}>View my resume.</div>
      </div>
    </Link>
  </div>
)

export default Menu
