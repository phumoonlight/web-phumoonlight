import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import style from './Nav.module.css'

const Nav = ({ label }) => (
  <div className={style.root}>
    <Link href="/">
      <span className={style.home}>Phumoonlight</span>
    </Link>
    <span className={style.label}>{`| ${label}`}</span>
  </div>
)

Nav.propTypes = {
  label: PropTypes.string.isRequired,
}

export default Nav
