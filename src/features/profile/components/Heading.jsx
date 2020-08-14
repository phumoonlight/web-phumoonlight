import React from 'react'
import style from './Heading.module.css'

const Heading = () => (
  <div className={style.root}>
    <img className={style.profileimg} src="/profile.png" alt="profile" />
    <h1>Poosarn Moolmuang</h1>
  </div>
)

export default Heading
